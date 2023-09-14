import mongoose from "mongoose";

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MONGODB`);
    }
    catch(error){
       console.log(`Error in MONGODB ${error}`);
    }
};

export default connectDB;