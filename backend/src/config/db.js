import mongoose from "mongoose"


export const connectDB = async () =>{
    try{
       await  mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB CONNECTED ")

    }catch(error){
    console.error("error mongodb",error);
    process.exit(1)
    }
};