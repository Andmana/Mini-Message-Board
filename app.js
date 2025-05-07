import express from "express";
import url from "url";
import path from "path";
import logger from "./middleware/loggerMiddleware.js";
import dateFormat from "./utils/dateFormat.js";

const PORT = process.env.PORT;
const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

// Set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Setup form req
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(logger);

app.get("/", (req, res) => {
    res.render("index", {
        messages: messages,
        title: "Messages",
        dateFormat: dateFormat,
    });
});

app.get("/new", (req, res) => {
    res.render("new");
});

app.post("/new", (req, res) => {
    const user = req.body.user.trim();
    const text = req.body.text.trim();

    messages.push({ user, text, added: new Date() });
    res.redirect(301, "/");
});

app.listen(PORT);
