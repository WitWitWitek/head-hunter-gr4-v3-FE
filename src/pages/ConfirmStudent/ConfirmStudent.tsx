import { useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import styles from "./ConfirmStudent.module.scss";
import { Button, Input } from "../../components/ui";
import { confirmStudentPasswordSchema } from "../../validation";
import { ConfirmStudentFormType } from "../../types/ConfirmStudentType";

export default function ConfirmStudent() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  console.log(token);

  const formik = useFormik<ConfirmStudentFormType>({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: confirmStudentPasswordSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Potwierdź swoje konto w Head Hunter:</h1>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <Input
            description="Podaj hasło"
            hasError={formik.touched.password && !!formik.errors.password}
            errorMessage={formik.errors.password}
            {...formik.getFieldProps("password")}
            type="password"
          />
          <Input
            description="Powtórz hasło"
            hasError={
              formik.touched.confirmPassword && !!formik.errors.confirmPassword
            }
            errorMessage={formik.errors.confirmPassword}
            {...formik.getFieldProps("confirmPassword")}
            type="password"
          />
          <Button type="submit">Aktywuj konto</Button>
        </form>
      </div>
    </div>
  );
}
