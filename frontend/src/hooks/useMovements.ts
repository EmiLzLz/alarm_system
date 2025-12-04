import { useState } from "react";
import {
  getAllMovements,
  getRecentMovement,
} from "../services/movementsService";
import type { Movement } from "../types/Movement";

export const useMovements = () => {
  const [movements, setMovements] = useState<Movement[]>([]);
  const [recentMovement, setRecentMovement] = useState<Movement | null>(null);
  const [loadingMovements, setLoadingMovements] = useState(false);
  const [loadingRecentMove, setLoadingRecentMove] = useState(false);
  const [errorMovements, setErrorMovements] = useState<string | null>(null);
  const [errorRecentMove, setErrorRecentMove] = useState<string | null>(null);

  const fetchMovements = async () => {
    try {
      setLoadingMovements(true);
      const data = await getAllMovements();
      setMovements(data);
    } catch (error) {
      setErrorMovements("Failed to fetch movements");
    } finally {
      setLoadingMovements(false);
    }
  };

  const fetchRecentMovement = async () => {
    try {
      setLoadingRecentMove(true);
      const data = await getRecentMovement();
      setRecentMovement(data);
    } catch (error) {
      setErrorRecentMove("Failed to fetch recent movement");
    } finally {
      setLoadingRecentMove(false);
    }
  };

  return {
    movements,
    recentMovement,
    loadingMovements,
    loadingRecentMove,
    fetchMovements,
    fetchRecentMovement,
    errorMovements,
    errorRecentMove
  };
};
