import { useState } from "react";
import {
  getAllMovements,
  getRecentMovement,
} from "../services/movementsService";
import type { Movement } from "../types/Movement";

export const useMovements = () => {
  const [movements, setMovements] = useState<Movement[]>([]);
  const [recentMovement, setRecentMovement] = useState<Movement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovements = async () => {
    try {
      setLoading(true);
      const data = await getAllMovements();
      setMovements(data);
    } catch (error) {
      setError("Failed to fetch movements");
    } finally {
      setLoading(false);
    }
  };

  const fetchRecentMovement = async () => {
    try {
      setLoading(true);
      const data = await getRecentMovement();
      setRecentMovement(data);
    } catch (error) {
      setError("Failed to fetch recent movement");
    } finally {
      setLoading(false);
    }
  };

  return {
    movements,
    recentMovement,
    loading,
    fetchMovements,
    fetchRecentMovement,
    error,
  };
};
