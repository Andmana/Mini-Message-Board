import messageRepository from "../repositories/messageRepository.js";
import dateFormat from "../utils/dateFormat.js";

/**
 * GET /
 * Renders the homepage with a list of all messages.
 */
export const getMessages = async (req, res) => {
  const messages = await messageRepository.getAllMessages();

  res.render("index", {
    messages: messages,
    title: "Messages",
    dateFormat: dateFormat,
  });
};

/**
 * GET /new
 * Renders the form for creating a new message.
 */
export const renderNewMessageForm = (req, res) => {
  res.render("new");
};

/**
 * POST /new
 * Handles submission of the new message form.
 * Trims input, adds message to the in-memory array, and redirects to home.
 */
export const postNewMessage = async (req, res) => {
  const username = req.body.username.trim();
  const text = req.body.text.trim();

  // Add new message to the list with a timestamp
  await messageRepository.createMessage(username, text);

  // Redirect to home after submission
  res.redirect(301, "/");
};
