const {router} = require("./routes/index")
let {favoritos} = require("./utils/favs")
const express = require('express');
const cors = require("cors");
const server = express();
const PORT = 3001;
server.use(express.json());
server.use("/", router);
server.use(cors());
server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});

server.post("/rickandmorty/fav/", (req,res)=>{
       favoritos.push(req.body)
       return res.json(200,{success: "funciono perfecto"})
   
})
server.get("/rickandmorty/fav/" ,(req,res)=>{
    
       return res.json(200,{favoritos})
    
})
server.get("/rickandmorty/detail/:id" ,(req,res)=>{
    
       return res.json(200,{favoritos})
   
})
server.delete("/rickandmorty/fav/:id",(req,res)=>{
    let {id} = req.params
    
        favoritos = favoritos.filter((fav)=> fav.id !== Number(id))
       return res.json(200,{favoritos:favoritos})
    
 
})
module.exports= {server};

