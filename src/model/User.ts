import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: {type: String},
  lastname: {type:String},
  email: {type:String, unique: true},
  password: {type: String},
  token: {type:String}
});

const User = mongoose.model("User", UserSchema);

export default User;