import mongoose from "mongoose";

const seccionSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        set: function (valor) {
            return valor.toUpperCase();
        }
    },
    numero: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    lista_nominal: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    nombre_clave: {
        type: String,
        require: true,
        unique: true,
       
    },
}, {
    timestamps: true
});


export default mongoose.model('Seccion', seccionSchema)