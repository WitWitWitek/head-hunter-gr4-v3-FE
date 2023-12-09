import { useFormik } from "formik";
import { studentValidationSchema } from "../../../validation";
import StudentStyle from "./StudentForm.module.scss";
import {
  IStudentFormData,
  ExpectedContractType,
  ExpectedTypeWork,
} from "../../../types/StudentFormType";
import { Input, TextArea, Select, Button } from "../../ui";
import {
  useGetUserDataMutation,
  useUpdateUserProfileMutation,
} from "../../../app/api/userApiSlice";
import { useSelector } from "react-redux";
import {
  selectCurrentRole,
  selectRelatedEntityId,
} from "../../../app/api/authSlice";
import { useEffect, useState } from "react";
export const StudentForm = () => {
  const [updateUser] = useUpdateUserProfileMutation();
  const [getUserData] = useGetUserDataMutation();
  const relatedEntityId = useSelector(selectRelatedEntityId);
  const role = useSelector(selectCurrentRole);
  const [initialValues, setInitialValues] = useState<IStudentFormData>({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    githubUsername: "",
    bio: "",
    targetWorkCity: "",
    expectedSalary: 0,
    monthsOfCommercialExp: 0,
    education: "",
    workExperience: "",
    courses: "",
    portfolioUrls: [""],
    projectUrls: [""],
    canTakeApprenticeship: false,
    expectedContractType: ExpectedContractType.IRRELEVANT,
    expectedTypeWork: ExpectedTypeWork.IRRELEVANT,
  });

  useEffect(() => {
    const getStudentData = async () => {
      if (role) {
        const userData = await getUserData({ role }).unwrap();
        setInitialValues(() => userData);
      }
    };
    getStudentData();
  }, []);

  const formik = useFormik<IStudentFormData>({
    initialValues: initialValues,
    validationSchema: studentValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      relatedEntityId &&
        role &&
        (await updateUser({
          relatedEntityId,
          role,
          studentFormData: { ...values },
        }));
    },
  });

  type ArrayFieldNames = "projectUrls" | "portfolioUrls";

  const addLink = (name: ArrayFieldNames) => {
    const currentLinks = formik.values[name] || [];
    const links = [...currentLinks, ""];

    formik.setFieldValue(name, links);
  };

  const removeLink = (name: ArrayFieldNames, index: number) => {
    const currentLinks = formik.values[name] || [];

    if (Array.isArray(currentLinks)) {
      const links = [...currentLinks];
      if (index >= 0 && index < links.length) {
        links.splice(index, 1);
        formik.setFieldValue(name, links);
      }
    }
  };
  return (
    <div className={StudentStyle.wrapper}>
      <form onSubmit={formik.handleSubmit} className={StudentStyle.form}>
        <h2 style={{ color: "white", margin: "40px 0 20px" }}>Dane Osobowe</h2>
        <Input
          description="E-mail"
          hasError={formik.touched.email && !!formik.errors.email}
          errorMessage={formik.errors.email}
          {...formik.getFieldProps("email")}
          type="email"
        />
        <Input
          description="Nr. telefonu"
          hasError={formik.touched.phone && !!formik.errors.phone}
          errorMessage={formik.errors.phone}
          {...formik.getFieldProps("phone")}
          type="text"
        />
        <Input
          description="Imię"
          hasError={formik.touched.firstName && !!formik.errors.firstName}
          errorMessage={formik.errors.firstName}
          {...formik.getFieldProps("firstName")}
          type="text"
        />
        <Input
          description="Nazwisko"
          hasError={formik.touched.lastName && !!formik.errors.lastName}
          errorMessage={formik.errors.lastName}
          {...formik.getFieldProps("lastName")}
          type="text"
        />
        <Input
          description="Login GitHuba"
          hasError={
            formik.touched.githubUsername && !!formik.errors.githubUsername
          }
          errorMessage={formik.errors.githubUsername}
          {...formik.getFieldProps("githubUsername")}
          type="text"
        />
        <h2 style={{ color: "white", margin: "40px 0 20px" }}>
          Preferencje dotyczące zatrudnienia
        </h2>
        <Input
          description="Docelowe miasto pracy"
          hasError={
            formik.touched.targetWorkCity && !!formik.errors.targetWorkCity
          }
          errorMessage={formik.errors.targetWorkCity}
          {...formik.getFieldProps("targetWorkCity")}
          type="text"
        />
        <Input
          description="Oczekiwane wynagrodzenie"
          hasError={
            formik.touched.expectedSalary && !!formik.errors.expectedSalary
          }
          errorMessage={formik.errors.expectedSalary}
          {...formik.getFieldProps("expectedSalary")}
          type="number"
        />
        <Select
          description="Preferowane miejsce pracy"
          value={formik.values.expectedTypeWork}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="expectedTypeWork"
          options={Object.values(ExpectedTypeWork)}
        />

        <Select
          description="Bezpłatny staż"
          value={formik.values.canTakeApprenticeship ? "Tak" : "Nie"}
          onChange={(e) =>
            formik.setFieldValue(
              "consentForUnpaidInternship",
              e.target.value === "Tak"
            )
          }
          onBlur={formik.handleBlur}
          name="consentForUnpaidInternship"
          options={["Tak", "Nie"]}
        />

        <Select
          description="Oczekiwany typ kontraktu"
          value={formik.values.expectedContractType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="expectedContractType"
          options={Object.values(ExpectedContractType)}
        />

        <Input
          description="Doświadczenie komercyjne (miesiące)"
          hasError={
            formik.touched.monthsOfCommercialExp &&
            !!formik.errors.monthsOfCommercialExp
          }
          errorMessage={formik.errors.monthsOfCommercialExp}
          {...formik.getFieldProps("monthsOfCommercialExp")}
          type="text"
        />
        <h2 style={{ color: "white", margin: "40px 0 20px" }}>
          Pozostałe dane kandydata
        </h2>
        <TextArea description="Życiorys" {...formik.getFieldProps("bio")} />
        <TextArea
          description="Przebieg edukacji"
          {...formik.getFieldProps("education")}
        />
        <TextArea
          description="Doświadczenie zawodowe"
          {...formik.getFieldProps("workExperience")}
        />
        <TextArea description="Kursy" {...formik.getFieldProps("courses")} />
        <div className={StudentStyle.linksContainer}>
          {formik.values.projectUrls &&
            formik.values.projectUrls.map((_, index) => (
              <div key={index} className={StudentStyle.link}>
                <Input
                  description={`Link do projektu ${index + 1}`}
                  hasError={
                    formik.touched.projectUrls &&
                    !!formik.errors.projectUrls?.[index]
                  }
                  errorMessage={formik.errors.projectUrls?.[index]}
                  {...formik.getFieldProps(`projectUrls.${index}`)}
                  type="text"
                />
                {index > 0 && (
                  <Button
                    type="button"
                    onClick={() => removeLink("projectUrls", index)}
                  >
                    Usuń
                  </Button>
                )}
              </div>
            ))}
          <Button type="button" onClick={() => addLink("projectUrls")}>
            Dodaj kolejny link
          </Button>
        </div>

        <div className={StudentStyle.linksContainer}>
          {formik.values.portfolioUrls?.map((_, index) => (
            <div key={index} className={StudentStyle.link}>
              <Input
                description={`Link do portfolio ${index + 1}`}
                hasError={
                  formik.touched.portfolioUrls &&
                  !!formik.errors.portfolioUrls?.[index]
                }
                errorMessage={formik.errors.portfolioUrls?.[index]}
                {...formik.getFieldProps(`portfolioUrls.${index}`)}
                type="text"
              />
              {index > 0 && (
                <Button
                  type="button"
                  onClick={() => removeLink("portfolioUrls", index)}
                >
                  Usuń
                </Button>
              )}
            </div>
          ))}
          <Button type="button" onClick={() => addLink("portfolioUrls")}>
            Dodaj kolejny link
          </Button>
        </div>

        <Button fullWidth type="submit" loading={formik.isSubmitting}>
          {formik.isSubmitting ? "Wysyłanie..." : "Wyślij"}
        </Button>
      </form>
    </div>
  );
};
