import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('<h1>Eduanalitycs API </h1>')
})

import authRoutes from './routes/auth.routes.js';
app.use('/auth', authRoutes)

import dataRoutes from './routes/data.routes.js';
app.use('/data', dataRoutes)

import setDataRoutes from './routes/setdata.routes.js';
app.use('/set', setDataRoutes)
app.listen(PORT, () => {
    console.log(`Server running port: ${PORT}`)
})
