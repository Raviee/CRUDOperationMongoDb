const express=require('express');
const alien = require('../models/alien');
const { findById } = require('../models/alien');
const router=express.Router();
const Alien=require('../models/alien');
router.get('/',async(req,res)=>{
    try{

        const aliens=await Alien.find();
        res.json(aliens);
    }catch(err)
    {
        res.send('Error' +err);
    }
})

router.get('/:id',async(req,res)=>{
    try{

        const alien=await Alien.findById(req.params.id);
        res.json(alien);
    }catch(err)
    {
        res.send('Error' +err);
    }
})


router.post('/',async(req,res)=>{
   const alien=new Alien({
       name: req.body.name,
       tech: req.body.tech,
       sub: req.body.sub
   })
   try{
       const a1=await alien.save();
       res.json(a1);
   }catch(err){
       res.send('Error');
   }
})


router.patch('/:id',async(req,res)=>{
    try{
        const aliens=await Alien.findById(req.params.id);
        if(aliens!=null)
        {
            if(req.body.name!=null)
        alien.name=req.body.name;
        if(req.body.tech!=null)
        alien.tech=req.body.tech;
        if(req.body.sub!=null)
        alien.sub=req.body.sub;
        const a1=await alien.save();
        res.json(a1);
        }
        else res.send('This id does not exists');
        }catch(err){
            res.send('Error');
        }
})

router.delete('/:id',async(req,res)=>{
    try{
        const aliens=await Alien.findById(req.params.id);
        const a1=await alien.remove();
        res.send('deleted');
        }catch(err){
            res.send('Error');
        }
})

module.exports=router;