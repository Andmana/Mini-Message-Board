import dateFormat from "../utils/dateFormat.js";

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

/**
 * GET /
 * Renders the homepage with a list of all messages.
 */
export const getMessages = (req, res) => {
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
export const postNewMessage = (req, res) => {
  const user = req.body.user.trim();
  const text = req.body.text.trim();

  // Add new message to the list with a timestamp
  messages.push({ user, text, added: new Date() });

  // Redirect to home after submission
  res.redirect(301, "/");
};
