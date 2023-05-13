import { Router } from "express";
import { getClientById } from "../controllers/clientController.js";

const router = Router();

// GET An Employee
router.get("/:id", getClientById);

export default router;
