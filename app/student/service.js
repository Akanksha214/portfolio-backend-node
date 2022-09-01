const Student = require('../models/student.model');

const students = {
    createStudents: async (req) => {
        let result = await Student.create(req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    getStudents: async (req) => {
        let result = await Student.find().exec();

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    updateStudents: async (req) => {
        let result = await Student.findByIdAndUpdate(req.body.studentId,req.body);;

        if (result == null) {
            return "nodata";
        }
        return result;
    },
}
module.exports = students;