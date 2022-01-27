import jwt from 'jsonwebtoken'
const secretKey = 'qwertyuiopasdfghjklzxcvbnm123456';
const users = {
    id:'789',
    name:'dataBase',
    email:'nik789@gmail.com'
}
export class UserController {

 login = (req , res) => {
    let token = jwt.sign(users,secretKey)
    
    res.status(200).json({message:"token generated successfully",token:token})

}
}


