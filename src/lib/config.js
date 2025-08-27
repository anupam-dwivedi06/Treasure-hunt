import mongoose from "mongoose"

const DBConnect = async () =>{
   try {
     await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("MongoDB connected succesfully")
    
   } catch (error) {
    console.log("mongodb connection error", error.message)
   }
}

export default DBConnect;