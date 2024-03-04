import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://luckasyuki:CYjdTu4J12d541b1@cluster0.u3zed8w.mongodb.net/?retryWrites=true&w=majority");
    console.log('>>>Data Base Connect')
  } catch (error) {
    console.log(error)
  }
};
