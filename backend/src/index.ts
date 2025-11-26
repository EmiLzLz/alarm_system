import "dotenv/config";
import app from "./app";
import connectDB from "./config/db";

const port = process.env.PORT || 8080;

//Connect to database
connectDB();

app.listen(port, () => console.log(`SERVER LISTENING ON PORT: ${port}`));
