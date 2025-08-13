import Service from "./service.js";

export const setStudentService = new Service('INSERT INTO student (name, grupo_id) VALUES (?, ?)');
export const setGradeService = new Service('INSERT INTO grade (grade, subject, student_id) VALUES (?, ?, ?)')