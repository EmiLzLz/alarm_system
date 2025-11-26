import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = "1";
    if (!mongoURI) {
      throw new Error("MONGODB_URL is not defined in environment variables");
    }

    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to mongoDB: ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;
