const mongoose = require('mongoose');


const CourseSchema = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    // _id:Number,
    name:String,
    description:String,
    category:Array,
    image:String,
    video:String
}); 

//Collection
module.exports=mongoose.model('course', CourseSchema);