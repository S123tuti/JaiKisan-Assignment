const mongoose = require ("mongoose")

const customerSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required : true
    },
    DOB:{
        type:String,
        required: true
    },
    emailId :{
        type:String,
        required:true
    },
    address:{
        type:String,
    },
    status:{
        type:String,
        enum :["Active", "Inactive"],
        required : true
    },
    isdeleted: {
        type : Boolean,
        default : false
    },
},{ timestamps: true })

module.exports = mongoose.model("customer", customerSchema)