import {
  getGroupsService,
  getGroupStudentsService,
  getStudentDataService,
  getGradesService,
  getTeacherService,
  getGlobalGradesService,
} from "../services/data.service.js";

const dataController = {
  getGroups: async (req, res) => {
    try {
      const response = await getGroupsService.makeRequest();
      if (response.length === 0)
        return res.status(200).json({ data: "Theres not groups" });
      res.status(200).json({ data: response });
    } catch (error) {
      res.status(400).json({ error: error.message || error });
    }
  },
  getGroupStudents: async (req, res) => {
    try {
      const { grupo_id } = req.query;
      if (!grupo_id)
        return res.status(400).json({ message: "grupo_id required" });
      getGroupStudentsService.data = { grupo_id };
      const response = await getGroupStudentsService.makeRequest();
      if (response.length === 0)
        return res.status(200).json({ data: "Theres not students in this group" });
      res.status(200).json({ data: response });
    } catch (error) {
      res.status(400).json({ error: error.message || error });
    }
  },
  getStudentData: async (req, res) => {
    try {
      const { student_id } = req.query;
      if (!student_id)
        return res.status(400).json({ message: "user_id required" });
      getStudentDataService.data = { student_id };
      const response = await getStudentDataService.makeRequest();
      if (response.length === 0)
        return res.status(200).json({ data: "Student not found" });
      res.status(200).json({ data: response });
    } catch (error) {
      res.status(400).json({ error: error.message || error });
    }
  },
  getGrades: async (req, res) => {
    try {
      const { student_id } = req.query;
      if (!student_id)
        return res.status(400).json({ message: "user_id required" });
      getGradesService.data = { student_id };
      const response = await getGradesService.makeRequest();
      if (response.length === 0)
        return res.status(200).json({ data: "Theres not grades or student" });
      res.status(200).json({ data: response });
    } catch (error) {
      res.status(400).json({ error: error.message || error });
    }
  },
  getTeacher: async (req, res) => {
    try {
      const { teacher_id } = req.query;
      if (!teacher_id)
        return res.status(400).json({ message: "teacher_id required" });
      getTeacherService.data = { teacher_id };
      const response = await getTeacherService.makeRequest();
      if (response.length === 0)
        return res.status(200).json({ data: "Teacher not found" });
      res.status(200).json({ data: { name: response[0].name } });
    } catch (error) {
      res.status(400).json({ error: error.message || error });
    }
  },
  getGlobalGrades: async (req, res) => {
    try {
      const response = await getGlobalGradesService.makeRequest();
      if (response.length === 0)
        return res.status(200).json({ data: "Theres not grades" });
      res.status(200).json({ data: response });
    } catch (error) {
      res.status(400).json({ error: error.message || error });
    }
  },
};

export default dataController;
