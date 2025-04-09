var mongoose =require("mongoose")

var userSchema = mongoose.Schema(
    {
        email:String,
        password:String,
        role:{type:String,enum:["admin","user"],default:"user"}

    }
)
var userModel = mongoose.model("user",userSchema)
module.exports=userModel;