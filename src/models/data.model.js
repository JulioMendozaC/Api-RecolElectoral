import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true,
    },
    apellido_p: {
        type: String,
        require: true,
        trim: true,
    },
    apellido_m: {
        type: String,
        require: true,
        trim: true,
    },
    curp: {
        type: String,
        require: true,
        trim: true,
    },
    fecha_nacimiento: {
        type: Date,
        // require: true,
        trim: true,
    },
    sexo: {
        type: String,
        require: true,
        trim: true,
    },
    telefono: {
        type: String,
        require: true,
        trim: true,
    },
    calle: {
        type: String,
        require: true,
        trim: true,
    },
    No_ext: {
        type: String,
        require: true,
        trim: true,
    },
    No_int: {
        type: String,
        require: true,
        trim: true,
    },
    colonia_barrio: {
        type: String,
        require: true,
        trim: true,
    },
    codigo_postal: {
        type: String,
        require: true,
        trim: true,
    },
    clave_electoral: {
        type: String,
        require: true,
        trim: true,
    },
    seccion: {
        type: String,
        require: true,
        trim: true,
    },
    fecha_vigencia: {
        type: Date,
        // require: true,
        trim: true,
    },
    promotor: {
        type: String,
        require: true,
        trim: true,
    },
    coordinador: {
        type: String,
        require: true,
        trim: true,
    },
 
   
}, {
    timestamps: true
});


export default mongoose.model('Data', dataSchema)