const CourseSchema = require('../Model/courseModel');


exports.getAllCourses=(request, response, next)=>{
    CourseSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
} 

exports.getCourseById=(request, response, next)=>{
    CourseSchema.findOne({_id:request.params.id})
        .then((data) => {
            if (data == null)
            throw new Error ("Course dosen't exist")
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
}

exports.addCourse=(request, response, next)=>{
    let newCourse = new CourseSchema({
        _id:request.body.id,
        name:request.body.name,
    });
    newCourse.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newCourse:data });
        })
        .catch((error)=>{next(error)});
}

exports.updateCourse=(request, response, next)=>{
    CourseSchema.updateOne({
        _id:request.body.id,
    },{
        $set:{name:request.body.name}
    })
        .then((data) => {
            response.status(200).json({data:"Course updated successfully"});
        }).catch((error) => {
            next(error)
        });
}

exports.deleteCourse=(request, response, next)=>{
    const courseId = request.params.id; // Assuming the ID is passed as a URL parameter

    CourseSchema.findByIdAndDelete(courseId)
        .then((deletedCourse) => {
            if (!deletedCourse) {
                throw new Error("Course not found");
            }
            response.status(200).json({ message: "Course deleted successfully" });
        })
        .catch((error) => {
            next(error);
        });

    // console.log(request.body)
    // response.status(200).json({data: "Course deleted successfully"});
}

