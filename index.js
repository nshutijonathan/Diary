const express=require("express");
const mongoose=require("mongoose");
const passport =require("passport");
const keys=require("./config/keys")
//initialize express
const  app=express();
//configure express to parse json
app.use(express.json());

//Cconnect to mongo db
mongoose
.connect(keys.mongoURL,{
	useNewUrlParser:true,
	useCreateIndex:true,
})
.then(()=>{
	console.log("mongo db connected");
})
.catch(err=>console.log(err));

//setup port 
const port=process.env.PORT ||3000;
app.listen(port,()=>{
	console.log(`server is running on port${port}`);
})