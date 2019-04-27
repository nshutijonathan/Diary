//where we will write our logic
//load models
const User=require("../models/User");
module.exports={
	//test route
	test:(req,res)=>{
		res.json({msg:"Users route works"})
	},
};