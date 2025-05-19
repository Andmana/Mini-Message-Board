import express from "express";
import dateFormat from "../utils/dateFormat.js";

const router = express.Router();

// Array to store messages
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

  {
    text: "lorem ipsum",
    user: "Charles",
    added: new Date(),
  },
];

// Route to render the homepage with messages
router.get("/", (req, res) => {
  res.render("index", {
    messages: messages,
    title: "Messages",
    dateFormat: dateFormat,
  });
});

// Route to render the "new message" page
router.get("/new", (req, res) => {
  res.render("new");
});

// Route to handle creating a new message
router.post("/new", (req, res) => {
  const user = req.body.user.trim();
  const text = req.body.text.trim();

  // Add new message to messages array
  messages.push({ user, text, added: new Date() });
  res.redirect(301, "/");
});

export default router;
