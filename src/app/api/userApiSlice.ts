import apiSlice from "../api/apiSlice";
import { toast } from "react-toastify";
import { CreateHrType, CreateStudentType } from "../../types/createStudentType";
import { ConfirmUserRequest } from "../../types/ConfirmStudentType";
import {
  BasicResponse,
  GetUserDataRequest,
  RemindPasswordRequest,
  UpdateUserRequest,
} from "../../types/StudentFormType";
import { IStudentData } from "../../types/IStudentData";
import { transformUserData } from "../../utils/transformUserData";
import { rtkErrorHandler } from "../../utils/rtkErrorHandler";

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
          toast.error(
            rtkErrorHandler(
              err,
              "Wystąpił błąd w trakcie dodwania studentów. Sprwadź swój plik."
            )
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
          toast.error(
            rtkErrorHandler(err, "Wystąpił błąd w trakcie dodwania HR.")
          );
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
          toast.error(rtkErrorHandler(err, "Wystąpił problem z weryfikacją."));
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
          toast.error(
            rtkErrorHandler(
              err,
              "Wystąpił błąd w trakcie aktualizowania użytkownika."
            )
          );
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
    remindUserPassword: builder.mutation<BasicResponse, RemindPasswordRequest>({
      query: ({ email }) => ({
        url: `/user/remind-password`,
        method: "PATCH",
        body: { email },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          toast.success(data.message);
        } catch (err) {
          toast.error(
            rtkErrorHandler(err, "Wystąpił błąd w trakcie przypominania hasła.")
          );
        }
      },
    }),
  }),
});

export const {
  useCreateStudentMutation,
  useCreateHrMutation,
  useConfirmUserMutation,
  useUpdateUserProfileMutation,
  useGetUserDataMutation,
  useRemindUserPasswordMutation,
} = authApiSlice;
