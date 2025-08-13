import express from 'express';
import setDataController from '../controllers/setdata.controller.js';
import { verifyToken } from '../middlewares/verifytoken.js';

const setDataRoutes = express.Router();

setDataRoutes
.post('/student', verifyToken, setDataController.setStudent)
.post('/grade', verifyToken,  setDataController.setGrade)

export default setDataRoutes;
