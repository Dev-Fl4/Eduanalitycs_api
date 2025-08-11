import connection from "../db/connection.js";
import jwt from 'jsonwebtoken';
import bcrypt, { compare } from 'bcrypt';
const authService = {
    registerService: async (data) =>{
        try {
            const [rows] = await connection.execute('SELECT * FROM teacher WHERE teacher.name = ?', [data.name]);
            if(rows.length !== 0){
                throw 'Teacher already register'
            }
            const hashedPassword = await bcrypt.hash(data.password, 10);
            await connection.execute('INSERT INTO teacher (name, password) VALUES (?, ?)', [data.name, hashedPassword])

            return 'teacher register succesfully'
        } catch (error) {
            throw error
        }
    },
    loginService: async (data) =>{
        try {
            const [rows] = await connection.execute('SELECT * FROM teacher WHERE teacher.name = ?', [data.name]);
            if(rows.length === 0){
                throw 'User not found'
            }
            const match = await compare(data.password, rows[0].password);
            if(!match){
                throw 'Incorrect Password'
            }
            const token =  jwt.sign({name: rows[0].name, id: rows[0].id}, process.env.JWT_SECRET_KEY, {expiresIn: '2h'});

            return {name: rows[0].name, token}
        } catch (error) {
            throw error
        }
    }
}

export default authService;