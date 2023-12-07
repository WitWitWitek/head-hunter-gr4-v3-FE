import apiSlice from "../api/apiSlice";
import { toast } from "react-toastify";
import { CreateStudentType } from "../../types/createStudentType";
import { ConfirmStudentRequest } from "../../types/ConfirmStudentType";

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
          toast.success("Students added.");
        } catch (err) {
          console.log(err);
          toast.error("Error occured. Check your file ");
        }
      },
    }),
    confirmStudent: builder.mutation<void, ConfirmStudentRequest>({
      query: ({ token, password }) => ({
        url: `/user/confirm/${token}`, // połaczyć z BE
        method: "POST",
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
  }),
});

export const { useCreateStudentMutation, useConfirmStudentMutation } =
  authApiSlice;
