import mongoose from "mongoose";

const PRIORITIES = ["Low", "Medium", "High"];
const STATUSES = ["Open", "In Progress", "Closed"];

const ticketSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 160 },
    description: { type: String, required: true, maxlength: 5000 },
    priority: { type: String, enum: PRIORITIES, default: "Low" },
    status: { type: String, enum: STATUSES, default: "Open" }
  },
  { timestamps: true }
);

export const Ticket = mongoose.model("Ticket", ticketSchema);
export const PRIORITY_ENUM = PRIORITIES;
export const STATUS_ENUM = STATUSES;
