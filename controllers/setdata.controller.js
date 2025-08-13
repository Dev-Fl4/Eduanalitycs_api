import { setGradeService, setStudentService } from "../services/setdata.service.js";
const setDataController = {
  setStudent: async (req, res) => {
    try {
      const { name, grupo_id } = req.body;
      if (!name || !grupo_id)
        return res.status(400).json({ message: "params required" });
      setStudentService.data = { name, grupo_id };
      setStudentService.makeRequest();
      res.status(201).json({ message: "Student set succesfully" });
    } catch (error) {
      res.status(400).json({ error: error.message || error });
    }
  },
    setGrade: async (req, res) => {
    try {
      const { grade, subject, student_id } = req.body;
      if (!grade || !subject || !student_id)
        return res.status(400).json({ message: "params required" });
      setGradeService.data = { grade, subject, student_id };
      setGradeService.makeRequest();
      res.status(201).json({ message: "Grade set succesfully" });
    } catch (error) {
      res.status(400).json({ error: error.message || error });
    }
  },
};


export default setDataController;