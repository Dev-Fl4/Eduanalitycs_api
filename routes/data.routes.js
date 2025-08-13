import express from 'express';
import dataController from '../controllers/data.controller.js';

const dataRoutes = express.Router();

dataRoutes
.get('/groups', dataController.getGroups)
.get('/student', dataController.getStudentData)
.get('/grades', dataController.getGrades)
.get('/teacher', dataController.getTeacher)
.get('/globalgrades', dataController.getGlobalGrades)
.get('/groupstudents', dataController.getGroupStudents)

export default dataRoutes;