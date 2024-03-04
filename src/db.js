import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://mongo:3fDA6bghe5fFh4c1aA4GGb4aD16Ce5GH@viaduct.proxy.rlwy.net:11913");
    console.log('>>>Data Base Connect')
  } catch (error) {
    console.log(error)
  }
};
