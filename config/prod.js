//keys.js -figuress out what set of credentials to return 

if(process.env.NODE_ENV==="production"){
	//we are hosting return prod set of keys
	module.exports=require("./prod")
}

else{
	//we are in dev,return dev set of keys
	module.exports=require("./dev");
	mongodb+srv://nshuti:<password>@cluster0-uh1t8.mongodb.net/test?retryWrites=true
}