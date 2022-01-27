import { Trainee_Controller } from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
const express = require('express');
const routes= express.Router();
const trainee = new Trainee_Controller();
routes.route('/')
.post(validationHandler(validation.create),trainee.create)
.get(validationHandler(validation.get),trainee.get)
.put(validationHandler(validation.update),trainee.put)
routes.route('/:id')
.delete(validationHandler(validation.delete),trainee.delete)
export default routes;
