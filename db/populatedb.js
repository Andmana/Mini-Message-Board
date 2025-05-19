import { Client } from "pg";
import "dotenv/config";

const SQL = `
DROP TABLE IF EXISTS messages;
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (255),
  text TEXT,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text) VALUES
  ('Amando', 'Hi there!'),
  ('Charles', 'Hello World!'),
  ('Charles', 'lorem ipsum');
`;

async function main() {
  console.log("Seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }, // ssl option adjusted for security
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Done seeding the database.");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await client.end();
  }
}

main();
