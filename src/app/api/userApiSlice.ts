import apiSlice from "../api/apiSlice";
import { toast } from "react-toastify";
import { CreateHrType, CreateStudentType } from "../../types/createStudentType";
import { ConfirmUserRequest } from "../../types/ConfirmStudentType";
import {
  ExpectedContractType,
  ExpectedTypeWork,
  GetUserDataRequest,
  GetUserDataResponse,
  IStudentFormData,
  UpdateUserRequest,
} from "../../types/StudentFormType";

type CreateUserRequest = {
  students: CreateStudentType[];
};

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation<string, CreateUserRequest>({
      query: ({ students }) => ({
        url: "/user/add-student",
        method: "POST",
        body: { students },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success("Studenci dodani pomyślnie");
        } catch (err) {
          console.log(err);
          toast.error(
            "Wystąpił błąd w trakcie dodwania studentów. Sprwadź swój plik."
          );
        }
      },
    }),
    createHr: builder.mutation<string, CreateHrType>({
      query: (args) => ({
        url: "/user/add-hr",
        method: "POST",
        body: { ...args },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success("Konto HR dodane.");
        } catch (err) {
          console.log(err);
          toast.error("Wystąpił błąd w trakcie dodwania HR.");
        }
      },
    }),
    confirmUser: builder.mutation<void, ConfirmUserRequest>({
      query: ({ token, password }) => ({
        url: `/user/confirm/${token}`,
        method: "PATCH",
        body: { password },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success("Użytkownik zweryfikowany. Zaloguj się.");
        } catch (err) {
          console.log(err);
          toast.error("Wystąpił problem z weryfikacją.");
        }
      },
    }),
    updateUserProfile: builder.mutation<string, UpdateUserRequest>({
      query: ({ role, relatedEntityId, studentFormData }) => ({
        url: `/${role}/${relatedEntityId}`,
        method: "PATCH",
        body: { ...studentFormData },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success("Profil użytkownika zaktualizowany pomyślnie.");
        } catch (err) {
          console.log(err);
          toast.error("Wystąpił błąd w trakcie aktualizowania użytkownika.");
        }
      },
    }),
    getUserData: builder.mutation<IStudentFormData, GetUserDataRequest>({
      query: ({ role }) => ({
        url: `/${role}/get-one`,
        method: "GET",
      }),
      transformResponse: (response: GetUserDataResponse): IStudentFormData => ({
        email: response.email,
        phone: response.student.profile?.phone ?? "",
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
          response.student.profile?.expectedTypeWork ??
          ExpectedTypeWork.IRRELEVANT,
        monthsOfCommercialExp:
          response.student.profile?.monthsOfCommercialExp ?? 0,
        portfolioUrls: response.student.profile?.projectUrls ?? [""],
        projectUrls: response.student.profile?.projectUrls ?? [""],
        workExperience: response.student.profile?.workExperience ?? "",
      }),
    }),
  }),
});

export const {
  useCreateStudentMutation,
  useCreateHrMutation,
  useConfirmUserMutation,
  useUpdateUserProfileMutation,
  useGetUserDataMutation,
} = authApiSlice;
