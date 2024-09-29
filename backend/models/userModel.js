import mongoose from "mongoose";
import addressModel, { addressSchema } from "./addressModels.js";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    addresses: [addressSchema]
}, {
    timestamps: true
})



const userModel = mongoose.model('User', userSchema) || mongoose.model("User")
export default userModel;