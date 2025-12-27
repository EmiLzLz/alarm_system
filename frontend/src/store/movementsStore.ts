import { create } from "zustand";
import type { Movement } from "../types/Movement";
import {
  getAllMovements,
  getRecentMovement,
} from "../services/movementsService";

type movementStore = {
  movements: Movement[];
  recentMovement: Movement | null;
  loadingMovements: boolean;
  loadingRecentMove: boolean;
  errorMovements: string | null;
  errorRecentMove: string | null;
  fetchMovementsAsync: () => Promise<void>;
  fetchRecentMovementAsync: () => Promise<void>;
};

export const useMovementsStore = create<movementStore>((set) => ({
  movements: [],
  recentMovement: null,
  loadingMovements: false,
  loadingRecentMove: false,
  errorMovements: null,
  errorRecentMove: null,

  fetchMovementsAsync: async () => {
    try {
      set({ loadingMovements: true });
      const data = await getAllMovements();
      set({ movements: data, errorMovements: null });
    } catch (error) {
      set({ errorMovements: "Failed to fetch movements" });
    } finally {
      set({ loadingMovements: false });
    }
  },

  fetchRecentMovementAsync: async () => {
    try {
      set({ loadingRecentMove: true });
      const data = await getRecentMovement();
      set({ recentMovement: data });
    } catch (error) {
      set({ errorRecentMove: "Failed to fetch recent movement" });
    } finally {
      set({ loadingRecentMove: false });
    }
  },
}));
