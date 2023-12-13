import express, {Request, Response} from "express";
import User from "../model/User"
import hashData from "../utils/hashData";
import { StatusCode } from "../enum/status";

const signUp =  async(req:Request, res:Response) =>{
  try{
    const {firstname, lastname, email, password} = req.body;

    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      throw Error("Email already exist");
    }

    const hashPassword = await hashData(password, 10);

    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashPassword
    })

    const createUser = await newUser.save();

    res.status(StatusCode.Created)
      .json(createUser);
  }catch(error){
    throw error;
  }
}

export {signUp}
