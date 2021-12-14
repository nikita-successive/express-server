import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'
import userSchema from './UserSchema'
const bcrypt = require('bcrypt')
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'Users');
userSchema.pre('save',async function(next){
    try{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password,salt);
    this.password=hashedPassword;
    next()
    }catch(error){
    next(error)
    }
})

const Users=mongoose.model('user',userSchema);
export default Users;