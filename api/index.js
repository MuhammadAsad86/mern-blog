import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();
mongoose.set("bufferCommands", false);

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000,
});
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Vercel Serverless Function
export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}

// Local Development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;

  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
}