// verifyToken.js
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY;

export function verifyToken(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ error: 'Token requerido' });
        }

        const token = authHeader.split(' ')[1]; // Formato: Bearer <token>
        if (!token) {
            return res.status(401).json({ error: 'Token inválido' });
        }

        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(403).json({ error: 'Token no válido o expirado' });
            }
            req.user = decoded; // Guarda los datos del token en la request
            next();
        });

    } catch (error) {
        res.status(500).json({ error: 'Error interno en verificación de token' });
    }
}
