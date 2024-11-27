import mongoose from "mongoose";
import { Schema } from "mongoose";

const PetSchema = new Schema({
    name : { 
        type: String,
        required: true
    },
    specie : {
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    owner : {
        type: String,
        required: true
    },
    phone : {
        type: String,
    }
});  

const Pet = mongoose.model("Cadastro", PetSchema);

export default Pet;