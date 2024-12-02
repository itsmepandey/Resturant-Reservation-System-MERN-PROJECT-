import express from "express";
// import send_reservation from "../controller/reservation.js";
import { sendReservation } from "../controller/reservation.js"

const router = express.Router();

router.post("/send", sendReservation);

export default router;