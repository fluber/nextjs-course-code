import { connectToDatabase, insertMessage } from "../../lib/db-util";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await connectToDatabase();
      if (!client) {
        res.status(500).json({ message: "Could not connect to database." });
        return;
      }
    } catch (error) {
      console.error("Database connection error:", error);
      res.status(500).json({ message: "Connecting to the database failed." });
      return;
    }

    try {
      const result = await insertMessage(client, "messages", newMessage);
      newMessage._id = result.insertedId;
      res
        .status(201)
        .json({ message: "Successfully stored message!", message: newMessage });
    } catch (error) {
      res.status(500).json({ message: "Storing message failed!" });
    }
    client.close();
  }
}
