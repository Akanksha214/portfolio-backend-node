const Service = require('../student/service');
exports.createStudents = async (req, res) => {
   try {
      console.log("hrre")
      let studentData = await Service.createStudents(req);
      if (studentData) {
         res.status(202).send({
            studentData
         });
      }
      }catch (error) {
         console.log("error...",error)
      }
   };
exports.getStudents = async (req, res) => {
   try {
      console.log("hrre")
      let studentData = await Service.getStudents(req);
      if (studentData) {
         res.status(202).send({
            studentData
         });
      }
      }catch (error) {
         console.log("error...",error)
      }
   };
exports.updateStudents = async (req, res) => {
   try {
      console.log("hrre")
      let studentData = await Service.updateStudents(req);
      if (studentData) {
         res.status(202).send({
            studentData
         });
      }
      }catch (error) {
         console.log("error...",error)
      }
   };