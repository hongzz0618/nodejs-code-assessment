import { Router } from "express";

import {
  getClientById,
  getClientByUsername,
  getClientByPolicyId,
} from "../controllers/clientController.js";
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

router.get(
  "/username/:username",
  authenticateToken,
  authUserRole(ROLES_LIST.UserAdmin),
  getClientByUsername
);

router.get(
  "/policy/:id",
  authenticateToken,
  authUserRole(ROLES_LIST.Admin),
  getClientByPolicyId
);

export default router;
