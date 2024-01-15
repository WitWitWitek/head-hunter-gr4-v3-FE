export type CreateStudentType = {
  email: string;
  courseCompletion: number;
  projectDegree: number;
  teamProjectDegree: number;
  courseEngagement: number;
  bonusProjectUrls: string;
};

export interface ExtendedStudentType extends CreateStudentType {
  status: string;
}

export type CreateHrType = {
  email: string;
  fullName: string;
  company: string;
  maxReservedStudents: number;
};
