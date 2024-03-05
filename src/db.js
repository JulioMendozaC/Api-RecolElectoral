import mongoose from "mongoose";
import 'dotenv/config'
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('>>>Data Base Connect')
  } catch (error) {
    console.log(error)
  }
};
