const express=require("express");
const router=express.Router();
const passport=require("passport");
//load controllers 
const UserController=require("../controllers/users");

router.route("/test").get(UserController.test);

module.exports = router;
