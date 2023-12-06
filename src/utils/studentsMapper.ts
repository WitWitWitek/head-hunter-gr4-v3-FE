import { CreateStudentType } from "../app/api/userApiSlice";

export const studentsMapper = (students: CreateStudentType[]) =>
  students.map((student) => ({
    ...student,
    courseCompletion: +student.courseCompletion,
    projectDegree: +student.projectDegree,
    teamProjectDegree: +student.teamProjectDegree,
    courseEngagement: +student.courseEngagement,
  }));
