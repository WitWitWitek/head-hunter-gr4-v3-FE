import { FormValues } from "../components/features/Filter/FilterDialog";
import { StudentQueryValues } from "../types/StudentFormType";

export const transformQueryParams = (
  params: FormValues
): StudentQueryValues => {
  let queryParams: StudentQueryValues = {};

  if (params.canTakeApprenticeship) {
    queryParams = {
      ...queryParams,
      canTakeApprenticeship: params.canTakeApprenticeship,
    };
  }

  if (params.teamProjectDegree) {
    queryParams = {
      ...queryParams,
      teamProjectDegree: Number(params.teamProjectDegree),
    };
  }

  if (params.courseCompletion) {
    queryParams = {
      ...queryParams,
      courseCompletion: Number(params.courseCompletion),
    };
  }

  if (params.courseEngagement) {
    queryParams = {
      ...queryParams,
      courseEngagement: Number(params.courseEngagement),
    };
  }

  if (params.projectDegree) {
    queryParams = {
      ...queryParams,
      projectDegree: Number(params.projectDegree),
    };
  }

  if (params.monthsOfCommercialExp) {
    queryParams = {
      ...queryParams,
      monthsOfCommercialExp: params.monthsOfCommercialExp,
    };
  }

  if (params.minSalary || params.maxSalary) {
    queryParams = {
      ...queryParams,
      expectedSalary: [
        Number(params.minSalary ?? 0),
        params.maxSalary ? Number(params.maxSalary) : 1000000,
      ],
    };
  }

  if (params.expectedContractType && params.expectedContractType.length > 0) {
    queryParams = {
      ...queryParams,
      expectedContractType: [...params.expectedContractType],
    };
  }

  if (params.expectedTypeWork && params.expectedTypeWork.length > 0) {
    queryParams = {
      ...queryParams,
      expectedTypeWork: [...params.expectedTypeWork],
    };
  }

  return queryParams;
};
