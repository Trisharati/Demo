const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    phone:{
        type:Number,
        required : true
    }
},
{
    timestamps : true,
    versionkey : false
})

module.exports = mongoose.model('student',studentSchema)