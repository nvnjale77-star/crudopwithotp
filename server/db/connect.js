import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/OTTPLATFORMDB");
    console.log("Connected to DATABASE");
  } catch (error) {
    console.log("Not Connected");
  }
};

export default connectDB;
