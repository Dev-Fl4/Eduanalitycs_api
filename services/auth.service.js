import connection from "../db/connection.js";
import bcrypt from 'bcrypt';
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
    }
}

export default authService;