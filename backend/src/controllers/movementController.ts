import movementService from "../services/movementService";
import type { Request, Response } from "express";

const handleCreateMovement = async (req: Request, res: Response) => {
  try {
    const newMovement = await movementService.createMovement(req.body);
    res.status(201).json(newMovement);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(400).json({ message });
  }
};

const handleGetAllMovements = async (req: Request, res: Response) => {
  try {
    const movements = await movementService.getAllMovements();
    res.status(200).json(movements);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(400).json({ message });
  }
};

const handleGetRecentMovement = async (req: Request, res: Response) => {
  try {
    const recentMovement = await movementService.getRecentMovement();

    if (!recentMovement) {
      return res.status(404).json({ message: "No movements found" });
    }
    
    res.status(200).json(recentMovement);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(400).json({ message });
  }
};

export { handleCreateMovement, handleGetAllMovements, handleGetRecentMovement };
