import express from "express";
import {
  getMessages,
  postNewMessage,
  renderNewMessageForm,
} from "../controllers/messageConstoller.js";

const router = express.Router();

// Route to render the homepage with messages

router.get("/", getMessages);

// Route to render the "new message" page
router.get("/new", renderNewMessageForm);

// Route to handle creating a new message
router.post("/new", postNewMessage);

export default router;
