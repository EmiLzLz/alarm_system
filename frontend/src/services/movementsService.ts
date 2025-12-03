import axios from "axios";
import type { Movement } from "../types/Movement";

const API_BASE_URL = "http://localhost:8080/api/movements";

export const getAllMovements = async (): Promise<Movement[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movements: `, error);
    throw error;
  }
};

export const getRecentMovement = async (): Promise<Movement | null> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recent`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movements: `, error);
    throw error;
  }
};
