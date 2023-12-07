import { useSearchParams } from "react-router-dom";
import { Field, Formik, FieldProps, Form } from "formik";
import Style from "../LoginPage/Login.module.scss";
import { Button, Input } from "../../components/ui";
import { confirmStudentPasswordSchema } from "../../validation";
interface ConfirmStudentValues {
  password: string;
  confirmPassword: string;
}

export default function ConfirmStudent() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  console.log(token);

  return (
    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values: ConfirmStudentValues) => {
        console.log(values);
      }}
      validationSchema={confirmStudentPasswordSchema}
    >
      <div className={Style.wrapper}>
        <Form className={Style.remindForm} noValidate>
          <Field name="password">
            {({ field, form }: FieldProps<string, ConfirmStudentValues>) => (
              <Input
                {...field}
                description="Podaj hasło"
                hasError={form.touched.password && !!form.errors.password}
                errorMessage={form.errors.password}
                type="password"
              />
            )}
          </Field>
          <Field name="confirmPassword">
            {({ field, form }: FieldProps<string, ConfirmStudentValues>) => (
              <Input
                {...field}
                description="Powtórz hasło"
                hasError={
                  form.touched.confirmPassword && !!form.errors.confirmPassword
                }
                errorMessage={form.errors.confirmPassword}
                type="password"
              />
            )}
          </Field>
          <Button type="submit">Aktywuj konto</Button>
        </Form>
      </div>
    </Formik>
  );
}
