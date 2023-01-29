const dotenv=require('dotenv')
dotenv.config()
const express=require('express');
const jwt=require('jsonwebtoken')
const app=express();




users=[
   { 
    "username":"shadab",
    "password":"1234"

   },
   { 
    "username":"shadab",
    "password":"1234"

   }
]

app.use(express.json())

//BOTH THE ENDPOINTS ARE WORKING IN POSTMAN IF NOT WORKING IN VS CODE EXTENSION
app.post('/login-user',(req,res)=>{
    const user={username:req.body.username,password:req.body.password};
    const accessToken=jwt.sign(user,process.env.ACCESS_SECRET_TOKEN)
    res.json({AccessToken:accessToken});
})

app.post('/create-user',(req,res)=>{
   
    users.push({username:req.body.username ,password:req.body.password});
    res.status(201).send();
})

app.listen(3000)