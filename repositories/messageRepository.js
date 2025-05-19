import pool from "../db/pool.js";

async function getAllMessages() {
  const { rows } = await pool.query("select * from messages");
  return rows;
}

async function createMessage(username, text) {
  await pool.query("INSERT INTO messages (username, text) values ($1, $2)", [
    username,
    text,
  ]);
}

export default { getAllMessages, createMessage };
