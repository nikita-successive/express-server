const express = require('express');
import data from './UserRepository';
import { seed } from '../../libs/seedData';
const userroute= express.Router();
userroute.route('/')
.post(seed,data.addUser)
export default userroute;