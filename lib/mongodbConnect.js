const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

const database = "firstDB";

const client = new MongoClient(uri);

export async function mongoDBConnect() {
  await client.connect();
  return client.db(database);
}
