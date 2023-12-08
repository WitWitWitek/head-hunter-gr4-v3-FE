export interface ConfirmUserFormType {
  password: string;
  confirmPassword: string;
}

export interface ConfirmUserRequest {
  token: string;
  password: string;
}
