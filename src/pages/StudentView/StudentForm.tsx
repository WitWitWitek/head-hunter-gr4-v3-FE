import { Formik, Form, FieldProps, Field } from "formik";
import { studentValidationSchema } from "../../validation";
import StudentStyle from "./StudentForm.module.scss";
import { StudentFormType } from "../../types/StudentFormType";
import { Input, TextArea } from "../../components/ui";

export const StudentForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        tel: "",
        firstName: "",
        lastName: "",
        githubUserName: "",
        bio: "",
        targetWorkCity: "",
        expectedSalary: 0,
        monthsOfCommercialExp: 0,
        education: "",
        workExperience: "",
        courses: "",
        portfolioInput: "",
        projectScrum: "",
        projectInput: "",
      }}
      onSubmit={(values: StudentFormType) => {
        console.log(values);
      }}
      validationSchema={studentValidationSchema}
    >
      <div className={StudentStyle.wrapper}>
        <Form className={StudentStyle.form} noValidate>
          <Field name="email">
            {({ field, form }: FieldProps<string, StudentFormType>) => (
              <Input
                {...field}
                description="E-mail"
                hasError={form.touched.email && !!form.errors.email}
                errorMessage={form.errors.email}
                type="email"
              />
            )}
          </Field>

          <Field name="tel">
            {({ field, form }: FieldProps<string, StudentFormType>) => (
              <Input
                {...field}
                description="Nr. telefonu"
                hasError={form.touched.tel && !!form.errors.tel}
                errorMessage={form.errors.tel}
                type="number"
              />
            )}
          </Field>

          <Field name="firstName">
            {({ field, form }: FieldProps<string, StudentFormType>) => (
              <Input
                {...field}
                description="Imię"
                hasError={form.touched.firstName && !!form.errors.firstName}
                errorMessage={form.errors.firstName}
                type="text"
              />
            )}
          </Field>

          <Field name="lastName">
            {({ field, form }: FieldProps<string, StudentFormType>) => (
              <Input
                {...field}
                description="Nazwisko"
                hasError={form.touched.lastName && !!form.errors.lastName}
                errorMessage={form.errors.lastName}
                type="text"
              />
            )}
          </Field>

          <Field name="githubUserName">
            {({ field, form }: FieldProps<string, StudentFormType>) => (
              <Input
                {...field}
                description="Link do GitHuba"
                hasError={
                  form.touched.githubUserName && !!form.errors.githubUserName
                }
                errorMessage={form.errors.githubUserName}
                type="text"
              />
            )}
          </Field>

          <Field name="bio">
            {({ field }: FieldProps<string, StudentFormType>) => (
              <TextArea description="Życiorys" {...field}></TextArea>
            )}
          </Field>

          <Field name="targetWorkCity">
            {({ field, form }: FieldProps<string, StudentFormType>) => (
              <Input
                {...field}
                description="Docelowe miasto pracy"
                hasError={
                  form.touched.targetWorkCity && !!form.errors.targetWorkCity
                }
                errorMessage={form.errors.targetWorkCity}
                type="text"
              />
            )}
          </Field>

          <Field name="expectedSalary">
            {({ field, form }: FieldProps<string, StudentFormType>) => (
              <Input
                {...field}
                description="Oczekiwane wynagrodzenie"
                hasError={
                  form.touched.expectedSalary && !!form.errors.expectedSalary
                }
                errorMessage={form.errors.expectedSalary}
                type="number"
              />
            )}
          </Field>

          <Field name="monthsOfCommercialExp">
            {({ field, form }: FieldProps<string, StudentFormType>) => (
              <Input
                {...field}
                description="Doświadczenie komercyjne(W miesiącach)"
                hasError={
                  form.touched.monthsOfCommercialExp &&
                  !!form.errors.monthsOfCommercialExp
                }
                errorMessage={form.errors.monthsOfCommercialExp}
                type="number"
              />
            )}
          </Field>

          <Field name="education">
            {({ field }: FieldProps<string, StudentFormType>) => (
              <TextArea description="Przebieg edukacji" {...field}></TextArea>
            )}
          </Field>

          <Field name="workExperience">
            {({ field }: FieldProps<string, StudentFormType>) => (
              <TextArea
                description="Doświadczenie zawodowe"
                {...field}
              ></TextArea>
            )}
          </Field>

          <Field name="courses">
            {({ field }: FieldProps<string, StudentFormType>) => (
              <TextArea description="Kursy" {...field}></TextArea>
            )}
          </Field>

          <Field name="portfolioInput">
            {({ field, form }: FieldProps<string, StudentFormType>) => (
              <Input
                {...field}
                description="Link do portfolio"
                hasError={
                  form.touched.portfolioInput && !!form.errors.portfolioInput
                }
                errorMessage={form.errors.portfolioInput}
                type="text"
              />
            )}
          </Field>

          <Field name="projectScrum">
            {({ field, form }: FieldProps<string, StudentFormType>) => (
              <Input
                {...field}
                description="Link do projketu scrum"
                hasError={
                  form.touched.projectScrum && !!form.errors.projectScrum
                }
                errorMessage={form.errors.projectScrum}
                type="text"
              />
            )}
          </Field>

          <Field name="projectInput">
            {({ field, form }: FieldProps<string, StudentFormType>) => (
              <Input
                {...field}
                description="Link do projektu grupowego"
                hasError={
                  form.touched.projectInput && !!form.errors.projectInput
                }
                errorMessage={form.errors.projectInput}
                type="text"
              />
            )}
          </Field>
          <button type="submit" className="btn">
            Wyślij
          </button>
        </Form>
      </div>
    </Formik>
  );
};
