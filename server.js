const express = require('express');
const app = express();
const db = require('./db')
const port =3000;
const bodyParser=require('body-parser');
app.use(bodyParser.json());

//import Routes
const userRoutes=require('./routes/userRoutes');
//use Routes
app.use('/',userRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port number ${port}`);
})