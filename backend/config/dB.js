import mongoose from "mongoose";
import 'dotenv/config'

const connectDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MONGODB connected successfully")
    } catch (error) {
        console.log(error)
    }
}

export {connectDb}