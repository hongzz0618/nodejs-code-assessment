import { Router } from "express";

import { getClientById } from "../controllers/clientController.js";
import {
  authenticateToken,
  authUserRole,
} from "../middleware/authentication.js";
import { ROLES_LIST } from "../config/roles.js";

const router = Router();

router.get(
  "/:id",
  authenticateToken,
  authUserRole(ROLES_LIST.UserAdmin),
  getClientById
);

export default router;
