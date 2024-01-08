import apiSlice from "../api/apiSlice";
import { toast } from "react-toastify";
import {
  StudentListToHrRequest,
  StudentListToHrResponseTransformed,
  AddStudentToInterviewRequest,
  StudentListToInterview,
} from "../../types/StudentFormType";
import {
  transformStudentToHrData,
  transformStudentsToInterview,
} from "../../utils/transformUserData";
import { rtkErrorHandler } from "../../utils/rtkErrorHandler";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudentsToHr: builder.query<
      StudentListToHrResponseTransformed,
      StudentListToHrRequest
    >({
      query: ({ page = 1, limit = 10, queryParams, search }) => ({
        url: `/student/hrstudentlist?page=${page}&limit=${limit}${
          search ? `&search=${search}` : ""
        }`,
        method: "POST",
        body: { ...queryParams },
      }),
      providesTags: ["Student"],
      transformResponse: transformStudentToHrData,
    }),
    getStudentSToInterview: builder.query<StudentListToInterview, "">({
      query: () => ({
        url: `/hr/interviews`,
        method: "GET",
      }),
      providesTags: ["Student"],
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
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success("Student dodany do rozmowy.");
        } catch (err) {
          toast.error(rtkErrorHandler(err));
        }
      },
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
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success("Student usunięty z listy.");
        } catch (err) {
          toast.error(rtkErrorHandler(err));
        }
      },
    }),
  }),
});

export const {
  useGetAllStudentsToHrQuery,
  useGetStudentSToInterviewQuery,
  useAddStudentToInterviewMutation,
  useDeleteStudentFromInterviewMutation,
} = authApiSlice;
