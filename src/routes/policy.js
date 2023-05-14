import { Router } from "express";

import { getPoliciesByUsername } from "../controllers/policyController.js";
import {
  authenticateToken,
  authUserRole,
} from "../middleware/authentication.js";
import { ROLES_LIST } from "../config/roles.js";

const router = Router();

router.get(
  "/username/:username",
  authenticateToken,
  authUserRole(ROLES_LIST.Admin),
  getPoliciesByUsername
);

export default router;
