import { UserController } from './controller';
import validationHandler from '../../libs/validationHandler';
import user_Validation from './validation';
const express = require('express');
const routes= express.Router();
const user = new UserController();
routes.route('/')
.post(validationHandler(user_Validation.login),user.login)
export default routes;
