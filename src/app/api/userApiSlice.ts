import apiSlice from "../api/apiSlice";
import { toast } from "react-toastify";
import { CreateStudentType } from "../../types/createStudentType";

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
  }),
});

export const { useCreateStudentMutation } = authApiSlice;
