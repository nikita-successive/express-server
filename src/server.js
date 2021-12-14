import{ errorHandler } from './libs/routes/errorHandler';
import{  notFound } from './libs/routes/notFoundRoute';
import  mainRoutes    from  './router';
import Database from "./libs/database"
import { config } from 'dotenv';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const dburl= require('dotenv').config().parsed.MONGO_URL;
const app = express();
app.use(express.json());
 class Server{
    constructor(config){
        this.run(config);
    }
    setupRoutes(){
        app.get("/",function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('Hello World!');
            res.end();
          });
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
    async run(config){
        
         let res = await Database.open(dburl);
         if(res==true){
             app.listen(config);
         }
        
    }

    initBodyParser(){
        app.use(bodyParser.urlencoded({
            extended:true
        }));
    }
}
module.exports = Server;
