import * as yup from "yup";
import { checkGitHubUsernameTrue } from "../utils/checkGithubUsernameTrue";
import {
  ExpectedContractType,
  ExpectedTypeWork,
} from "../types/StudentFormType";
export const studentValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Nieprawidłowy adres email")
    .required("Podaj email"),
  phone: yup
    .string()
    .matches(/^(?:\d{9}|)$/, "Podaj dokładnie 9 cyfr")
    .nullable(),
  firstName: yup
    .string()
    .max(50, "Imię nie może być dłuższe niż 50 znaków")
    .required("Podaj imię"),
  lastName: yup
    .string()
    .max(100, "Nazwisko nie może być dłuższe niż 100 znaków")
    .required("Podaj nazwisko"),
  githubUsername: yup
    .string()
    .nullable()
    .max(255, "Wprowadzona nazwa jest za długa")
    .required("Podaj swoją nazwę użytkownika GitHuba")
    .test(
      "check-github-username",
      "Ten login GitHuba nie istnieje",
      async function (value) {
        if (!value) {
          return true;
        }
        try {
          const isAvailable = await checkGitHubUsernameTrue(value);
          return isAvailable;
        } catch (error) {
          console.error("Błąd:", error);
          return false;
        }
      }
    ),
  bio: yup.string().max(500, "Wprowadzony tekst jest za długi"),
  targetWorkCity: yup
    .string()
    .nullable()
    .max(50, "Wprowadzony tekst jest za długi"),
  expectedSalary: yup
    .number()
    .nullable()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? null : value
    )
    .typeError("Oczekiwanie wynagrodzenie musi byc liczba"),
  education: yup.string().max(10000, "Wprowadzony tekst jest za długi"),
  workExperience: yup.string().max(10000, "Wprowadzony tekst jest za długi"),
  courses: yup.string().max(10000, "Wprowadzony tekst jest za długi"),
  projectUrls: yup
    .array()
    .of(
      yup
        .string()
        .url("Niepoprawny adres URL")
        .required(
          "Podaj adres URL - podanie linku do projektu zaliczeniowego jest obowiązkowe"
        )
    ),
  portfolioUrls: yup
    .array()
    .of(yup.string().url("Niepoprawny adres URL").nullable())
    .nullable()
    .notRequired(),

  expectedTypeWork: yup
    .mixed()
    .oneOf(Object.values(ExpectedTypeWork))
    .required("Wymagane jest podanie preferowanego miejsca pracy"),
  canTakeApprenticeship: yup.boolean(),
  expectedContractType: yup
    .mixed()
    .oneOf(Object.values(ExpectedContractType))
    .required("Wymagany jest wybór typu kontraktu"),
  monthsOfCommercialExp: yup
    .number()
    .min(
      0,
      "Liczba miesięcy doświadczenia komercyjnego nie może być mniejsza niż 0"
    )
    .max(999, "Za duża wartość")
    .required("Podaj liczbę miesięcy doświadczenia komercyjnego"),
});
