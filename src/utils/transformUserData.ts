import { IStudentData } from "../types/IStudentData";
import {
  GetUserDataResponse,
  StudentListToHrResponseTransformed,
  StudentListToHrReponse,
} from "../types/StudentFormType";
import {
  ExpectedContractType,
  ExpectedTypeWork,
} from "../types/StudentFormType";

export const transformUserData = (
  response: GetUserDataResponse
): IStudentData => ({
  id: response.id,
  email: response.email,
  bonusProjectUrls: response.student?.bonusProjectUrls ?? [""],
  courseCompletion: response.student?.courseCompletion ?? 0,
  courseEngagement: response.student?.courseEngagement ?? 0,
  projectDegree: response.student?.projectDegree ?? 0,
  teamProjectDegree: response.student?.teamProjectDegree ?? 0,
  phone: response.student?.profile?.phone ?? "",
  firstName: response.student.profile?.firstName ?? "",
  lastName: response.student.profile?.lastName ?? "",
  githubUsername: response.student.profile?.githubUsername ?? "",
  bio: response.student.profile?.bio ?? "",
  targetWorkCity: response.student.profile?.targetWorkCity ?? "",
  expectedSalary: response.student.profile?.expectedSalary ?? 0,
  canTakeApprenticeship:
    response.student.profile?.canTakeApprenticeship ?? false,
  courses: response.student.profile?.courses ?? "",
  education: response.student.profile?.education ?? "",
  expectedContractType:
    response.student.profile?.expectedContractType ??
    ExpectedContractType.IRRELEVANT,
  expectedTypeWork:
    response.student.profile?.expectedTypeWork ?? ExpectedTypeWork.IRRELEVANT,
  monthsOfCommercialExp: response.student.profile?.monthsOfCommercialExp ?? 0,
  portfolioUrls: response.student.profile?.projectUrls ?? [""],
  projectUrls: response.student.profile?.projectUrls ?? [""],
  workExperience: response.student.profile?.workExperience ?? "",
});

export const transformStudentToHrData = (
  response: StudentListToHrReponse
): StudentListToHrResponseTransformed => ({
  studentsCount: response.studentsCount,
  lastPage: response.lastPage,
  students: response.students.map((student) => transformUserData(student)),
});
