import mongoose from "mongoose";

const coordinadorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
    trim: true,
  },
  apellido_pat: {
    type: String,
    require: true,
    trim: true,
  },
  apellido_mat: {
    type: String,
    require: true,
    trim: true,
  },
  nombreCompleto: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true
});


export default mongoose.model('Coordinador', coordinadorSchema)