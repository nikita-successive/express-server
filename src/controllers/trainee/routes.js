import { Trainee_Controller } from './controller';
const express = require('express');
const routes= express.Router();
const trainee = new Trainee_Controller();
routes.get('/',trainee.trainne_get_routes);
routes.post('/',trainee.trainee_post_routes);
routes.put('/',trainee.trainee_put_routes);
routes.delete('/',trainee.trainee_delete_routes);

export default routes;
