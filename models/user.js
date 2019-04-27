const mongoose=require("mongoose");
const {Schema}=mongoose;
const bcrypt=require("bcryptjs");
//create a schema

const UserSchema=new Schema({
	name:{
		type:String,
		required:true,
	},
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	date:{
		type:Date,
		default:Date.now(),
	},
});
//hash passwords before save
UserSchema.pre("save",async function(next){
	try{
        //generate salt
        const salt=await bcrypt.genSalt(10);
        //generate a hash reassign the hashed version with original plain text password
        this.password=await bcrypt.hash(this.password,salt);
        next();
	}
	catch(err){
         next(err);       
	}
});

module.exports=User=mongoose.model("users",UserSchema);
