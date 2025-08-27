import express from 'express';
import dataController from '../controllers/data.controller.js';
import { verifyToken } from '../middlewares/verifytoken.js';

const dataRoutes = express.Router();

dataRoutes
.get('/groups', verifyToken, dataController.getGroups)
.get('/student', verifyToken, dataController.getStudentData)
.get('/grades', verifyToken, dataController.getGrades)
.get('/teacher', verifyToken, dataController.getTeacher)
.get('/groupstudents', verifyToken, dataController.getGroupStudents)
.get('/groupgrades', verifyToken, dataController.getGroupGrades)
.get('/subjectgrades', verifyToken, dataController.getSubjectGrades)
.get('/subjectgroupgrades', verifyToken, dataController.getSubjectGroupGrades)
.get('/groupaverage', verifyToken, dataController.getGroupAverage)
.get('/subjectaverage', verifyToken, dataController.getSubjectAverage)
.get('/groupsubjectaverage', verifyToken, dataController.getGroupSubjectAverage)
.get('/stidentGrades', verifyToken, dataController.getStudentGrades)

export default dataRoutes;