import { Router } from "express";
import { getToken } from "../controllers/authController.js";

const router = Router();

router.get("/isuser/:email", getToken);

export default router;
