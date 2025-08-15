import express from 'express';
import dataController from '../controllers/data.controller.js';
import { verifyToken } from '../middlewares/verifytoken.js';

const dataRoutes = express.Router();

dataRoutes
.get('/groups', verifyToken, dataController.getGroups)
.get('/student', verifyToken, dataController.getStudentData)
.get('/grades', verifyToken, dataController.getGrades)
.get('/teacher', verifyToken, dataController.getTeacher)
.get('/globalgrades', verifyToken, dataController.getGlobalGrades)
.get('/groupstudents', verifyToken, dataController.getGroupStudents)
.get('/groupgrades', verifyToken, dataController.getGroupGrades)

export default dataRoutes;