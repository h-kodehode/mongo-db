import { mongoDBConnect } from "@/lib/mongodbConnect";

export async function GET() {
  const databaseConnection = await mongoDBConnect();

  const data = await databaseConnection.collection("users").find({}).toArray();

  return Response.json(data);
}
