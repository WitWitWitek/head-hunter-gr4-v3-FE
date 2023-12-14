import apiSlice from "../api/apiSlice";
import { toast } from "react-toastify";
import { CreateHrType, CreateStudentType } from "../../types/createStudentType";
import { ConfirmUserRequest } from "../../types/ConfirmStudentType";
import {
  GetUserDataRequest,
  StudentListToHrRequest,
  UpdateUserRequest,
  StudentListToHrResponseTransformed,
  AddStudentToInterviewRequest,
  StudentListToInterview,
} from "../../types/StudentFormType";
import { IStudentData } from "../../types/IStudentData";
import {
  transformStudentToHrData,
  transformStudentsToInterview,
  transformUserData,
} from "../../utils/transformUserData";

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
    getUserData: builder.mutation<IStudentData, GetUserDataRequest>({
      query: ({ role }) => ({
        url: `/${role}/get-one`,
        method: "GET",
      }),
      transformResponse: transformUserData,
    }),
    getAllStudentsToHr: builder.mutation<
      StudentListToHrResponseTransformed,
      StudentListToHrRequest
    >({
      query: ({ page = 1, limit = 10, queryParams }) => ({
        url: `/student/hrstudentlist?page=${page}&limit=${limit}`,
        method: "POST",
        body: { ...queryParams },
      }),
      invalidatesTags: ["Student"],
      transformResponse: transformStudentToHrData,
    }),
    getStudentSToInterview: builder.mutation<StudentListToInterview, "">({
      query: () => ({
        url: `/hr/interviews`,
        method: "GET",
      }),
      invalidatesTags: ["Student"],
      transformResponse: transformStudentsToInterview,
    }),
    addStudentToInterview: builder.mutation<
      string,
      AddStudentToInterviewRequest
    >({
      query: ({ studentId }) => ({
        url: `/hr/interviews/${studentId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Student"],
    }),
    deleteStudentFromInterview: builder.mutation<
      string,
      AddStudentToInterviewRequest
    >({
      query: ({ studentId }) => ({
        url: `/hr/interviews/${studentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Student"],
    }),
  }),
});

export const {
  useCreateStudentMutation,
  useCreateHrMutation,
  useConfirmUserMutation,
  useUpdateUserProfileMutation,
  useGetUserDataMutation,
  useGetAllStudentsToHrMutation,
  useGetStudentSToInterviewMutation,
  useAddStudentToInterviewMutation,
  useDeleteStudentFromInterviewMutation,
} = authApiSlice;
