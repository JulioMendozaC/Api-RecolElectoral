import mongoose from "mongoose";

const promotorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true,
        unique: true,
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
        require: true,
        trim: true,
    },
}, {
    timestamps: true
});


export default mongoose.model('Promotor', promotorSchema)