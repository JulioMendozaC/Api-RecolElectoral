import mongoose from "mongoose";

const coordinadorSchema = new mongoose.Schema({
  nombre: {
      type: String,
      require: true,
      trim: true,
  }
}, {
    timestamps: true
});


export default mongoose.model('Coordinador', coordinadorSchema)