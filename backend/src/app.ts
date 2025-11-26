import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL || "http://localhost:5173"],
  })
);


//routes

//get
app.get("/", (req, res) => {
  res.send("HELLO WORLD FROM MY BACKEND WITH EXPRESS AND NODEJS");
});

export default app;