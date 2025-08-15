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
