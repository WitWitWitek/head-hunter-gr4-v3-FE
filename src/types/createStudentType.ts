export type CreateStudentType = {
  email: string;
  password: string;
  username: string;
  courseCompletion: number;
  projectDegree: number;
  teamProjectDegree: number;
  courseEngagement: number;
};

export type CreateHrType = {
  email: string;
  fullName: string;
  company: string;
  maxReservedStudents: number;
};
