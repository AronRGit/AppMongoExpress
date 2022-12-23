const express = require('express');
const clientesSchema = require('../models/clientes');
const router = express.Router();



//CREATE CLIENTES
router.post('/clientes',(req,res)=>{
   const cliente= clientesSchema(req.body);
   cliente
   .save()
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
});

//GET ALL CLIENTES
router.get('/clientes',(req,res)=>{
  
   clientesSchema
   .find()
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
});

//GET A CLIENTE
router.get('/clientes/:id',(req,res)=>{
   const {id} = req.params;
  
   clientesSchema
   .findById(id)
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
});

//UPDATE A CLIENTE
router.put('/clientes/:id',(req,res)=>{
   const {id} = req.params;
   const {nomb_cliente,telefono,ciudad,calle,numero,estado,fecha_nacimiento}= req.body;
   clientesSchema
   .updateOne({_id: id},{$set: {nomb_cliente,telefono,ciudad,calle,numero,estado,fecha_nacimiento} })
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
});


//DELETE A CLIENTE
router.delete('/clientes/:id',(req,res)=>{
   const {id} = req.params;
   
   clientesSchema
   .remove({_id: id})
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
});
module.exports = router;

 