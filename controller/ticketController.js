import * as service from "../services/ticketServices.js";

export async function getAllTickets(_req, res, next) {
  try {
    const data = await service.listTickets();
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function postTicket(req, res, next) {
  try {
    const data = await service.createTicket(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
}

export async function putTicket(req, res, next) {
  try {
    const data = await service.updateTicket(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
}
