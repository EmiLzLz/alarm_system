import app from "./app";
import "dotenv/config";

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`SERVER LISTENING ON PORT: ${port}`));
