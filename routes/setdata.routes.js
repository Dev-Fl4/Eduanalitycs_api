import express from 'express';
import setDataController from '../controllers/setdata.controller.js';

const setDataRoutes = express.Router();

setDataRoutes
.post('/student', setDataController.setStudent)
.post('/grade', setDataController.setGrade)

export default setDataRoutes;
