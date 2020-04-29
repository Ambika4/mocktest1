const express = require('express');
const db=require('./config/mongoose');
const bodyParser = require('body-parser')
const port=8000;/** On port 80 all website hosts */
/*app listen to the port*/


const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded());

app.get('/', (req, res) => res.send('Hello World!'));


app.listen(port,function(err){
    if(err){
        console.log('Error: ',err);
    }
    console.log(`server is running on port${port}`);
});
