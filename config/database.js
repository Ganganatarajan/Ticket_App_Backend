import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGO_URI // If the .env file is not working, put the MongoDB URL directly here
  if (!uri) {
    console.error("MONGO_URI not set in env");
    process.exit(1);
  }
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  console.log("MongoDB connected");
}
