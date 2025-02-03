require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const htaccess = require('express-htaccess-middleware')
const Router = require('./routes/routes')

require('./config/db')
require('./model/index')
app.use(
    htaccess({
      file: __dirname + "/.htaccess",
    })
  );
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  app.use(express.urlencoded({ extended: true }));
    
  app.use('/',Router)
  

 
 

const port = 4000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})