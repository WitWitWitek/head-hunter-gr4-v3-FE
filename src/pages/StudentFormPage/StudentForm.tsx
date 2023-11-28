import { Formik, Form } from "formik";
import { studentValidationSchema } from "../../validation";
import { CustomInput } from "../../components/ui/input/CustomInput";
import { CustomArea } from "../../components/ui/input/CustomArea";
import { Values } from "../../types/StudentTypes/Values";
import StudentStyle from "./StudentForm.module.scss";

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
      onSubmit={(values: Values) => {
        console.log(values);
      }}
      validationSchema={studentValidationSchema}
    >
      <Form className={StudentStyle.form}>
        <CustomInput label="E-mail" name="email" type="email" />
        <CustomInput label="Telefon" name="tel" type="number" />
        <CustomInput label="Name" name="firstName" type="text" />
        <CustomInput label="Nazwisko" name="lastname" type="text" />
        <CustomInput label="Github link" name="githubUserName" type="text" />
        <CustomArea label="Życiorys" name="bio" />
        <CustomInput
          label="Docelowe miasto pracy"
          name="targetWorkCity"
          type="text"
        />
        <CustomInput
          label="Oczekiwane wynagrodzenie"
          name="expectedSalary"
          type="number"
        />
        <CustomInput
          label="Doświadczenie komercyjne(W miesiącach)"
          name="monthsOfCommercialExp"
          type="number"
        />
        <CustomArea label="Przebieg edukacji" name="education" />
        <CustomArea label="Doświadczenie zawodowe" name="workExperience" />
        <CustomArea label="Kursy" name="courses" />
        <CustomInput
          label="Link do portfolio"
          name="portfolioInput"
          type="text"
        />
        <CustomInput
          label="Link do projketu scrum"
          name="projectScrum"
          type="text"
        />
        <CustomInput
          label="Link do projektu grupowego"
          name="projectInput"
          type="text"
        />
        <button type="submit" className="btn">
          Wyślij
        </button>
      </Form>
    </Formik>
  );
};
