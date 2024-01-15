import { ErrorResponse } from "../app/api/authApiSlice";

export const rtkErrorHandler = (
  err: unknown,
  optionalMessage?: string
): string => {
  const message = (err as ErrorResponse)?.error?.data?.message;
  return message ?? optionalMessage ?? "Wystapił problem.";
};
