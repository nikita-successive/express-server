import { traineeRoutes } from './controllers/trainee/index'
import { userRoutes } from './controllers/user';
const express = require('express');
const mainRoutes = new express.Router();
mainRoutes.use('/trainee',traineeRoutes);
mainRoutes.use('/login',userRoutes);
export default mainRoutes;
