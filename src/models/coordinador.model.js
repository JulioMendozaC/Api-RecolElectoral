import mongoose from "mongoose";

const coordinadorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
    trim: true,
    set: function (valor) {
      return valor.toUpperCase();
  }
  },
  apellido_pat: {
    type: String,
    require: true,
    trim: true,
    set: function (valor) {
      return valor.toUpperCase();
  }
  },
  apellido_mat: {
    type: String,
    require: true,
    trim: true,
    set: function (valor) {
      return valor.toUpperCase();
  }
  },
  nombreCompleto: {
    type: String,
    trim: true,
    set: function (valor) {
      return valor.toUpperCase();
  }
  },
}, {
  timestamps: true
});


export default mongoose.model('Coordinador', coordinadorSchema)