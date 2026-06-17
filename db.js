const mongoose = require('mongoose');
const mongoDbUrl='mongodb://localhost:27017/resturant'
mongoose.connect(mongoDbUrl);
const db= mongoose.connection;
db.on('connected',()=>{
    console.log('MongoDb Connected Successfully')
})
db.on('error',(err)=>{
    console.log('MonoDb Connection Error:',err)
})
db.on('disconnected',()=>{
    console.log('MongoDB disconnected')
})
module.exports = db;