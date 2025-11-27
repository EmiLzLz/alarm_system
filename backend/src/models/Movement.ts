import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movementSchema = new Schema(
  {
    event: {
      type: String,
      required: true,
      enum: ["motion_detected"],
    },
    duration: {
      type: Number,
      required: true,
      min: 0, 
    },
    timestamp: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Movement = mongoose.model("Movement", movementSchema);
