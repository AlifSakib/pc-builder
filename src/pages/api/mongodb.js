import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://pc-builder:l5MREnTSzqOc2EFk@cluster0.bhscg57.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db("pc-builder");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    throw error;
  }
}
