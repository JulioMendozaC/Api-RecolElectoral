import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true,
        set: function (valor) {
            return valor.toUpperCase();
        }
        
    },
    apellido_p: {
        type: String,
        require: true,
        trim: true,
        set: function (valor) {
            return valor.toUpperCase();
        }
    },
    apellido_m: {
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
    curp: {
        type: String,
        require: true,
        trim: true,
        set: function (valor) {
            return valor.toUpperCase();
        }
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
        set: function (valor) {
            return valor.toUpperCase();
        }
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
        set: function (valor) {
            return valor.toUpperCase();
        }
    },
    No_ext: {
        type: String,
        require: true,
        trim: true,
        set: function (valor) {
            return valor.toUpperCase();
        }
    },
    No_int: {
        type: String,
        require: true,
        trim: true,
        set: function (valor) {
            return valor.toUpperCase();
        }
    },
    colonia_barrio: {
        type: String,
        require: true,
        trim: true,
        set: function (valor) {
            return valor.toUpperCase();
        }
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
        set: function (valor) {
            return valor.toUpperCase();
        }
    },
    seccion: {
        type: String,
        require: true,
        set: function (valor) {
            return valor.toUpperCase();
        }
    },
    fecha_vigencia: {
        type: String,
        require: true,
        trim: true,
        set: function (valor) {
            return valor.toUpperCase();
        }
    },
    promotor: {
        type: String,
        require: true,
        trim: true,
        set: function (valor) {
            return valor.toUpperCase();
        }
    },
    coordinador: {
        type: String,
        require: true,
        trim: true,
        set: function (valor) {
            return valor.toUpperCase();
        }
    },
 
   
}, {
    timestamps: true
});


export default mongoose.model('Data', dataSchema)