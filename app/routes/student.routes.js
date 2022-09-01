module.exports = (app) => {
    const studentController = require('../student/student.controller.js');
    
    app.post('/create-students', studentController.createStudents);
    app.get('/get-students', studentController.getStudents);
    app.put('/update-students', studentController.updateStudents);
    
   
}