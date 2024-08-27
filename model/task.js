const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    name: {
        type:String,            //##The keys are validaions ,you can get more infor in mongoose documentation
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'maximum length must not exceed 20 characters']
    },
    completed:{
        type:Boolean,
        default:false,
    }
})
module.exports = mongoose.model("task", taskSchema)