import mongoose from "mongoose";

const promotorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
}, {
    timestamps: true
});


export default mongoose.model('Promotor', promotorSchema)