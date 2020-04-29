const express = require('express');
const db=require('./config/mongoose');
const bodyParser = require('body-parser')
const port=8000;/** On port 80 all website hosts */
/*app listen to the port*/


const app = express();
app.use(bodyParser.json());

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