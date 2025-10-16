import { mongoDBConnect } from "@/lib/mongodbConnect";

export async function GET() {
  const databaseConnection = await mongoDBConnect();

  const data = await databaseConnection
    .collection("firstDB")
    .find({})
    .toArray();

  return Response.json(data);
}
