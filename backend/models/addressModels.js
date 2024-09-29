import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    relation: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    }
})

const addressModel = new mongoose.model("address", addressSchema) || mongoose.model("address")

export { addressSchema }

export default addressModel;