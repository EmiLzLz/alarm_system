import { Movement } from "../models/Movement";
import type { IMovement } from "../types/IMovement";

const movementService = {
  async createMovement(movementData: IMovement) {
    console.log("SERVICE: Attemping to create new movement notification");

    const newMovement = await Movement.create(movementData);

    return newMovement;
  },

  async getAllMovements() {
    console.log("SERVICE: Fetching all movements");

    const movements = await Movement.find({}).sort({ createdAt: -1 });

    return movements;
  },

  async getRecentMovement() {
    console.log("SERVICE: Fetching the most recent item");

    const recentItem = await Movement.findOne({})
      .sort({ createdAt: -1 }) // Sort by timestamp in descending order
      .limit(1) // Get one result (findOne already do it, this is just to clarify)
      .exec(); //execute the query

    return recentItem;
  },
};

export default movementService;
