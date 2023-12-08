import { useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import styles from "./ConfirmStudent.module.scss";
import { Button, Input } from "../../components/ui";
import { confirmStudentPasswordSchema } from "../../validation";
import { ConfirmUserFormType } from "../../types/ConfirmStudentType";
import { useConfirmUserMutation } from "../../app/api/userApiSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import logo from "../../assets/images/logoMegaK.webp";

export default function ConfirmUser() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [confirmUser, { isSuccess }] = useConfirmUserMutation();
  const navigate = useNavigate();

  useEffect(() => {
    isSuccess && navigate(`/`);
  }, [isSuccess, navigate]);

  const formik = useFormik<ConfirmUserFormType>({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: confirmStudentPasswordSchema,
    onSubmit: async (values) => {
      if (token) {
        await confirmUser({ token, password: values.password });
      } else {
        toast.error("Token jest wymagany.");
      }
    },
  });

  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="Logo MegaK" className={styles.logo} />
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
          <Button type="submit" loading={formik.isSubmitting}>
            {formik.isSubmitting ? "Wysyłanie danych..." : "Aktywuj konto"}
          </Button>
        </form>
      </div>
    </div>
  );
}
