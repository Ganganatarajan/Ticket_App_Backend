import { Router } from "express";
import { getAllTickets, postTicket, putTicket } from "../controller/ticketController.js";

const router = Router();
router.get("/", getAllTickets);
router.post("/", postTicket);
router.put("/:id", putTicket);

export default router;
