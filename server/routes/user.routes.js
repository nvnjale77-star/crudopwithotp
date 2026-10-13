import e, { Router } from "express";
import userModel from "../model/user.schema.js";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("welcome user");
});

userRouter.post("/register", async (req, res) => {
  try {
    const { email } = req.body;

    if(!email){
      return res.status(401).json({success : false, msg : "yaar email to bhejo...."})
    }



    const userExists =  await userModel.findOne({email})

    if(userExists){
      return res.status(401).json({success : false, msg : "email aapki pahle se hai aap pagal mat banao....."})
    }


   const newUser =  await userModel.create({
      email
    })

    res.status(201).json({success : true, msg : "User Registred Successfully.", newUser})

  } catch (error) {
    console.log(error);
  }
});

export default userRouter;
