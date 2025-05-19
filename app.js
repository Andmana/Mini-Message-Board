import express from "express";
import url from "url";
import path from "path";
import logger from "./middleware/loggerMiddleware.js";
import MessageRouter from "./router/messageRouter.js";

import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Setup form req
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(logger);

// Use the messages router for handling routes under "/"
app.use("/", MessageRouter);

app.listen(PORT, () => {
  console.log(`Server ruin on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
