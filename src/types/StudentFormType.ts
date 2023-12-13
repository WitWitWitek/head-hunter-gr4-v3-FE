import { UserRole } from "../app/api/authSlice";
import { IStudentData } from "./IStudentData";

export interface IStudentFormData {
  bio: string;
  canTakeApprenticeship: boolean;
  courses: string;
  education: string | null;
  email: string;
  expectedContractType: ExpectedContractType;
  expectedSalary: number | null;
  expectedTypeWork: ExpectedTypeWork;
  firstName: string;
  githubUsername: string;
  lastName: string;
  monthsOfCommercialExp: number;
  portfolioUrls?: string[] | null;
  projectUrls: string[];
  targetWorkCity: string;
  phone: string;
  workExperience: string;
}

export enum ExpectedContractType {
  UoP = "Tylko UoP",
  B2B = "Możliwe B2B",
  UZ_UoD = "Możliwe UZ/UoD",
  IRRELEVANT = "Brak preferencji",
}
export enum ExpectedTypeWork {
  AT_LOCATION = "Na miejscu",
  CHANGE_OF_LOCATION = "Gotowość do przeprowadzki",
  REMOTE = "Wyłącznie zdalnie",
  HYBRID = "Hybrydowo",
  IRRELEVANT = "Bez znaczenia",
}

export type UpdateUserRequest = {
  role: Omit<UserRole, "null">;
  relatedEntityId: string;
  studentFormData: IStudentFormData;
};

export type GetUserDataRequest = {
  role: Omit<UserRole, "null">;
};

export interface GetUserDataResponse {
  id: string;
  email: string;
  student: {
    id: string;
    courseCompletion: number;
    courseEngagement: number;
    projectDegree: number;
    teamProjectDegree: number;
    bonusProjectUrls: string[];
    status: string;
    isActive: boolean;
    profile: Omit<IStudentFormData, "email"> | null;
  };
}

export type StudentListToHrRequest = {
  page: number;
  limit: number;
};

export interface StudentListToHrReponse {
  studentsCount: number;
  lastPage: number;
  students: GetUserDataResponse[];
}

export interface StudentListToHrResponseTransformed {
  studentsCount: number;
  lastPage: number;
  students: IStudentData[];
}

export type AddStudentToInterviewRequest = {
  studentId: string;
};

export interface StudentListToInterviewReponse {
  students: GetUserDataResponse[];
}

export interface StudentListToInterview {
  students: IStudentData[];
}
