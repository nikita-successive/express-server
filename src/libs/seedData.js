import Users from "../repositories/user/UserModel";
const bcrypt = require('bcrypt');
export const seed = async (req,res,next) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash('trained@123', salt);
    const user = {
      email: 'nikit@successive.tech',
      name: 'nikita',
      password: hash,
      role: 'head-trainer',
      userId: 'nikita',
    };
      try {
        const count= await Users.countDocuments();
        if (count === 0) {
         try{
             let data = new Users(user);
             await data.save();
             res.send("User Seed Data Saved Successfully");
         }
         catch(err){
             res.send(err)
         }
        }
        else{
            next();
        }
      } catch (error) {
        console.log('error is created', error);
      }
  };
  