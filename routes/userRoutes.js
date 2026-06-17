const express = require('express');
const routes = express.Router();
const user = require('./../modelSchema/userSchema')
const bodyParser=require('body-parser');
routes.use(bodyParser.json());

//post method
routes.post('/user', async(req,res)=>{
    const data = req.body;
    try{
        const newPerson = new user(data);
        const saveData = await newPerson.save();
        res.status(200).json({message:'Data saved successfully',saveData})
        console.log.log(saveData)

    }catch(err){
        res.status(500).json({message:'Internal server error'})
    }
})
//get method
routes.get('/user', async (req,res)=>{
    try{
        const data = await user.find()
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({message:'Internal server Error'})
    }
})
//update method
routes.put('/user/:id', async(req,res)=>{
    try{
        const userId = req.params.id;
        const data = req.body;
        const updateData = await user.findByIdAndUpdate(userId,data,{
            new:true,
            runValidators:true
        })
        res.status(200).json({message:'Data update successfully',updateData})

    }catch(err){
        res.status(500).json({message:'Internal server error'})
    }
})

//delete Method
routes.delete('/user/:id',async(req,res)=>{
    try{
        const userId = req.params.id;
        const deleteData = await user.findByIdAndDelete(userId);
        res.status(200).json({message:'Data deleted successfully',deleteData})

    }catch(err){
        res.status(500).json({message:'Internal Server Error'})
    }
})

module.exports = routes