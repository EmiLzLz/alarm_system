import { Router } from "express";
import {
  handleCreateMovement,
  handleGetAllMovements,
  handleGetRecentMovement,
} from "../controllers/movementController";

const movementsRoutes = Router();

movementsRoutes.post("/", handleCreateMovement);
movementsRoutes.get("/", handleGetAllMovements);
movementsRoutes.get("/recent", handleGetRecentMovement);

export default movementsRoutes;
