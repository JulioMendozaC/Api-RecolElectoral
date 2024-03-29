import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
      type: String,
      require: true,
      trim: true,
  },
  rol: {
      type: String,
      require: true,
      trim: true,
  },
  password: {
      type: String,
      require: true,
  },
}, {
    timestamps: true
});


export default mongoose.model('User', userSchema)