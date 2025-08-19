import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGO_URI ||"mongodb+srv://ganganatarajan2000:QhZ669Fi4lUeCJgo@cluster0.ykaqguo.mongodb.net/todo"
  if (!uri) {
    console.error("MONGO_URI not set in env");
    process.exit(1);
  }
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  console.log("MongoDB connected");
}
