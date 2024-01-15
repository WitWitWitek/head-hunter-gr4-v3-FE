import * as yup from "yup";

export const passwordForgottenSchema = yup
  .object()
  .shape({
    userEmail: yup
      .string()
      .email("Nieprawidłowy email")
      .required("Podaj email"),

    confirmEmail: yup
      .string()
      .oneOf(
        [yup.ref("userEmail")],
        "Email musi pokrywać sie z e-mailem podanym podczas rejestracji"
      ),
  })
  .required();

export const hrSchema = yup
  .object()
  .shape({
    email: yup.string().email("Nieprawidłowy email").required("Podaj email"),

    fullName: yup
      .string()
      .min(2, "Musisz podać przynajmniej 2 znaki")
      .max(50, "Imię i nazwisko nie może być dłuższe niż 50 znaków")
      .required("Podaj imię i nazwisko"),

    company: yup
      .string()
      .min(1, "Musisz podać przynajmniej jeden znak")
      .max(120, "Nazwa firmy nie może być dłuższa niż 120 znaków")
      .required("Podaj nazwę firmy"),

    maxReservedStudents: yup
      .number()
      .typeError("Musisz podać liczbę")
      .min(1, "Liczba studentów musi wynosić minimum 1")
      .max(999, "Liczba studentów nie może przekraczać 999")
      .required("Podaj liczbę studentów do rozmowy"),
  })
  .required("Musisz podać liczbę studentów");

export const loginSchema = yup.object().shape({
  loginEmail: yup.string().required("Podaj email"),
  loginPassword: yup.string().min(1, "Pole nie może być puste"),
});

export const createPasswordSchema = yup.object().shape({
  loginEmail: yup
    .string()
    .email("Niepoprawny adres e-mail")
    .required("Adres e-mail jest wymagany"),
  registerPassword: yup
    .string()
    .min(1, "Pole nie może być puste")
    .max(255, "Hasło nie może być dłuższe niż 255 znaków")
    .required("Podaj hasło")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
      "Hasło nie spełnia wymagań bezpieczeństwa."
    ),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("registerPassword")], "Hasła muszą być takie same"),
});

export const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("Podaj stare hasło"),

  changedPassword: yup
    .string()
    .min(1, "Pole nie może być puste")
    .max(255, "Hasło nie może być dłuższe niż 255 znaków")
    .required("Podaj hasło")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
      "Hasło nie spełnia wymagań bezpieczeństwa."
    ),

  confirmChangedPassword: yup
    .string()
    .oneOf([yup.ref("changedPassword")], "Hasła muszą być takie same"),
});

export const confirmStudentPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(1, "Pole nie może być puste")
    .max(255, "Hasło nie może być dłuższe niż 255 znaków")
    .required("Podaj hasło")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
      "Hasło nie spełnia wymagań bezpieczeństwa."
    ),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Hasła muszą być takie same"),
});
