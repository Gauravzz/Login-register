//schema = data format

const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    password:{
        type:String,
        required:true,
    },
    firstname:{
        type:String,
        required:true,
    },
    middlename:{
        type:String,
    },
    lastname:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    number:{
        type:Number,
        required:true,
        unique:true
    },
    picture:{
        type:String,
        required:true,
    }
})



//we are creating a new collection

const UserCollection = new mongoose.model("UserCollection", userSchema)

module.exports = UserCollection;    