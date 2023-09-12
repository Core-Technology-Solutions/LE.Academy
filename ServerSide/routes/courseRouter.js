const express = require('express');
const controller = require('./../Controller/courseController')
const router = express.Router(); // create routes object and return it



router.route('/LEAcademy/courses')
    .get(controller.getAllCourses)
    .post( controller.addCourse)
    .patch(controller.updateCourse)
    // .delete(controller.deleteCourse)

router.route('/LEAcademy/courses/:id?')
    .get(controller.getCourseById)
    .delete(controller.getCourseById)

// router.route('/courses')
//     .patch(controller.updateCourse)



module.exports=router;