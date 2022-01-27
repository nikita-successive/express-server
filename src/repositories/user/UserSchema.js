import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    email: String,
    name: String,
   password: String,
    role: String,
    userId: String
})
export default userSchema;
