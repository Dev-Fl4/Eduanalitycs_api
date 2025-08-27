import Service from "./service.js";

export const getGroupsService = new Service("SELECT * FROM grupos");
export const getGroupStudentsService = new Service(
  "SELECT * FROM student WHERE student.grupo_id = ?"
);
export const getStudentDataService = new Service(
  "SELECT * FROM student WHERE student.id = ?"
);
export const getGradesService = new Service(
  "SELECT * FROM grade INNER JOIN student ON grade.student_id = student.id WHERE student.id = ?"
);
export const getTeacherService = new Service(
  "SELECT * FROM teacher WHERE teacher.id = ?"
);
export const getGroupGradesService = new Service(`SELECT n.grade
FROM grade AS n
JOIN student AS u ON n.student_id = u.id
JOIN grupos AS g ON u.grupo_id = g.id
WHERE g.id = ?`);
export const getSubjectGradesService = new Service(
  `SELECT * FROM grade WHERE grade.subject = ?`
);
export const getSubjectGroupGradesService = new Service(`
  SELECT n.grade
  FROM grade AS n
  JOIN student AS u ON n.student_id = u.id
  JOIN grupos AS g ON u.grupo_id = g.id
  WHERE g.id = ? AND n.subject = ?
`);
export const getGroupAverageService = new Service(`
SELECT g.id,
       g.name AS grupo,
       AVG(gr.grade) AS promedio
FROM grade gr
JOIN student s ON gr.student_id = s.id
JOIN grupos g ON s.grupo_id = g.id
WHERE g.id = ?                 -- ← aquí pasas el id del grupo
GROUP BY g.id, g.name;
`);
export const getSubjectAverageService = new Service(`
  SELECT AVG(grade) AS promedio
  FROM grade
  WHERE grade.subject = ?;
`);
export const getGroupSubjectAverageService = new Service(
  `
SELECT AVG(g.grade) AS promedio
FROM grade AS g
JOIN student AS s ON s.id = g.student_id
WHERE g.subject = ?    
  AND s.grupo_id = ?;  
  `
);
export const getStudentGradesService = new Service(`
  SELECT * FROM grade WHERE grade.student_id = ?;
  `)
