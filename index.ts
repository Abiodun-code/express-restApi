import express, {Express, Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import { StatusCode } from "./src/enum/status";
import userRouter from "./src/router/User";

const app:Express = express();

// Middleware configuration
app.use(cors());
app.use(express.json());

// Configure .env 
dotenv.config();
require("./src/config/db");
const port = process.env.PORT || 8000;

// Listing all the routes in Array
const routes = [userRouter];

routes.map((item)=>{
  app.use("/api/v1", item)
});

app.get('/', (req:Request, res:Response) => {
  res
  .status(StatusCode.OK)
  .send("Welcome to my express tutor")
});

app.listen(port, ()=>{
  console.log(`Server running on port http://localhost:${port}`)
});