const mongoose = require('mongoose')
const Schema = mongoose.Schema
const isEmail = require('validator/lib/isEmail')
const userSchema = new Schema({
   name:{
        type: String,
        minlength: 6,
        maxlength: 64,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        validate:{
            validator:function(value){
                  return isEmail(vale)
            },
            message:function(){
                return 'invalid email format'
            }
        }
    },
    password:{
        type: String,
        maxlength: 128,
        minlength: 8
    },
    role:{
        type: String,
        enum: ['user','admin', 'shopper']
    },
    address:{
        type: String
    }
   
})

const User = mongoose.model('User', userSchema)

module.exports = User