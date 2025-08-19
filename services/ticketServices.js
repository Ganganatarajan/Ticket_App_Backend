import { Ticket } from "../models/ticketModel.js";

export async function listTickets() {
  return Ticket.find().sort({ createdAt: -1 }).lean();
}

export async function createTicket(payload) {
  const doc = await Ticket.create({
    title: payload.title,
    description: payload.description,
    priority: payload.priority ?? "Low",
    status: "Open"
  });
  return doc.toObject();
}

export async function updateTicket(id, next) {
  const allowed = ["title", "description", "priority", "status"];
  const update = {};
  for (const k of allowed) if (k in next) update[k] = next[k];

  const doc = await Ticket.findByIdAndUpdate(id, update, {
    new: true,
    runValidators: true
  }).lean();

  if (!doc) {
    const err = new Error("Ticket not found");
    err.statusCode = 404;
    throw err;
  }
  return doc;
}
