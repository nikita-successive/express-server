import { traineeRoutes } from './controllers/trainee/index'
import { userRoutes } from './controllers/user';
import userroute from './repositories/user/routes';
const express = require('express');
const mainRoutes = new express.Router();
mainRoutes.use('/trainee',traineeRoutes);
mainRoutes.use('/login',userRoutes);
mainRoutes.use('/users',userroute);
export default mainRoutes;
