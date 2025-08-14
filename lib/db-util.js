import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  return MongoClient.connect(process.env.MONGODB_URI);
}

export async function insertMessage(client, collectionName, document) {
  const db = client.db();
  const collection = db.collection(collectionName);
  return collection.insertOne(document);
}

export async function getAllMessages(client, filter, collectionName, sort = {}) {
  const db = client.db();
  const collection = db.collection(collectionName);
  return collection.find(filter).sort(sort).toArray();
}