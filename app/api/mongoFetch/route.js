import { connection } from "next/server";

export async function GET() {
  const conection = await mongoDBConnect();

  const data = await connection.collection("firstDB").find({}).toArray();

  return Response.json(data);
}
