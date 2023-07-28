import { connectToDatabase } from "../mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const db = await connectToDatabase();
    const { id } = req.query;
    const product_collection = db.collection("products");

    // Debugging: Print the extracted categoryId to check if it's correct
    console.log("Requested categoryId:", id);

    // Use the correct field name for the category ID in the query
    const products = await product_collection
      .find({ categoryId: parseInt(id) }) // Parse the id to integer if needed
      .toArray();

    // Debugging: Print the found products to check if they match the expected category
    console.log("Found products:", products);

    res.status(200).json(products);
  } catch (error) {
    console.log("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// import { connectToDatabase } from "../mongodb";

// export default async function handler(req, res) {
//   if (req.method !== "GET") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     const db = await connectToDatabase();
//     const { id } = req.query;
//     const product_collection = db.collection("products");
//     const category_collection = db.collection("categories");

//     // Use the correct field name for the category ID in the query
//     const products = await product_collection
//       .find({ categoryId: parseInt(id) }) // Parse the id to integer if needed
//       .toArray();

//     // Fetch the category name from the categories collection based on categoryId
//     const category = await category_collection.findOne({ id: parseInt(id) });

//     // Create a response object containing both the products and the category name
//     const response = {
//       products,
//       category: category ? category.title : null, // If the category is not found, set it to null
//     };

//     res.status(200).json(response);
//   } catch (error) {
//     console.log("Error fetching products:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }
