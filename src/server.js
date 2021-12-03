import{ errorHandler } from './libs/routes/errorHandler';
import{  notFound } from './libs/routes/notFoundRoute';
import  mainRoutes    from  './router';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
 class Server{
    constructor(config){
        app.listen(config);
        this.run();
    }
    setupRoutes(){
        app.get('/health-check',function(req,res){
            res.send('I am Okay!');
        });
        app.use(mainRoutes);
        app.use(notFound);
    }
    bootstrap(){
        this.initBodyParser();
        this.setupRoutes();
    }
    run(){
        app.get("/",function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('Hello World!');
            res.end();
          });
    
    }
    initBodyParser(){
        app.use(bodyParser.urlencoded({
            extended:true
        }));
    }
}
module.exports = Server;
