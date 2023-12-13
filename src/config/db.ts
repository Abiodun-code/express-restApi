import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const db = process.env.MONGO_URL;

const connectToDB = async() =>{
  await mongoose.connect(db).then(
    () => console.log("Database connected")
  ).catch(
    ()=> console.log("Database disconnected")
  )
}

connectToDB();