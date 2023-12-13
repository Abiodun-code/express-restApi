import bcrypt from "bcrypt";

const hashData = async (data: any, saltRounds  =10)=>{
  try{
    const hashedData = await bcrypt.hash(data, saltRounds);
    return hashedData;
  }catch(error){
    throw error;
  }
}

export default hashData