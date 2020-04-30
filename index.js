const queryParser = require('express-query-parser')
const express = require('express');
const db=require('./config/mongoose');
const bodyParser = require('body-parser')
const port=8000;/** On port 80 all website hosts */
/*app listen to the port*/


const app = express();

//for pasrsing query params
app.use(
    queryParser({
      parseNull: true,
      parseBoolean: true
    })
)

//for parsing body
app.use(bodyParser.json());

//if there is  form data
app.use(express.urlencoded());

//routes
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log('Error: ',err);
    }
    console.log(`server is running on port${port}`);
});
module.exports = app;