import mongoose from 'mongoose'
import userSchema from './UserSchema'
import Users from './UserModel'
class Userdata{
     addUser =async(req,res)=>{
     const user = req.body;
     const newUser = new Users(user);
     
     try{
        await newUser.save();
        res.json(newUser);
     }catch(error){
     res.json({message:error.message});
     }

    }
}
const data = new Userdata();
export default data;
