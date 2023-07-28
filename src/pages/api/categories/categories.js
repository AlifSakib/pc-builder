import { connectToDatabase } from "../mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const db = await connectToDatabase();
    const collection = db.collection("categories");
    const products = await collection.find({}).toArray();

    res.status(200).json(products);
  } catch (error) {
    console.log("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
