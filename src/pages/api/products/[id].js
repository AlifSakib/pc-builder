import { ObjectId } from "mongodb";
import { connectToDatabase } from "../mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query; // Access the product ID from the URL query parameters

  try {
    const db = await connectToDatabase();
    const collection = db.collection("products");
    const product = await collection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
