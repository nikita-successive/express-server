import { traineeRoutes } from './controllers/trainee/index'
const express = require('express');
const mainRoutes = new express.Router();
mainRoutes.use('/trainee',traineeRoutes);
export default mainRoutes;
