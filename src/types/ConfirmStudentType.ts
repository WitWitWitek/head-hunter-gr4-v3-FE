export interface ConfirmStudentFormType {
  password: string;
  confirmPassword: string;
}

export interface ConfirmStudentRequest {
  token: string;
  password: string;
}
