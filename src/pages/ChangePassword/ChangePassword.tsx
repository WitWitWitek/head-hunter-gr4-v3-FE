import { Field, FieldProps, Form, Formik } from "formik";
import { Button } from "../../components/ui/Button/Button";
import { Input } from "../../components/ui/Input/Input";
import Style from "../RemaindPage/RemindPage.module.scss";
import { changePasswordSchema } from "../../validation/userValidationSchema";
interface changePassowrdValues {
  changedPassword: string;
  confirmChangedPassword: string;
}

export const ChangePassword = () => {
  return (
    <Formik
      initialValues={{
        changedPassword: "",
        confirmChangedPassword: "",
      }}
      onSubmit={(values: changePassowrdValues) => {
        console.log(values);
      }}
      validationSchema={changePasswordSchema}
    >
      <div className={Style.wrapper}>
        <Form className={Style.remindForm} noValidate>
          <Field name="changedPassword">
            {({ field, form }: FieldProps<string, changePassowrdValues>) => (
              <Input
                {...field}
                description="Nowe hasło"
                hasError={
                  form.touched.changedPassword && !!form.errors.changedPassword
                }
                errorMessage={form.errors.changedPassword}
                type="email"
              />
            )}
          </Field>
          <Field name="confirmChangedPassword">
            {({ field, form }: FieldProps<string, changePassowrdValues>) => (
              <Input
                {...field}
                description="Powtórz nowe hasło"
                hasError={
                  form.touched.confirmChangedPassword &&
                  !!form.errors.confirmChangedPassword
                }
                errorMessage={form.errors.confirmChangedPassword}
                type="email"
              />
            )}
          </Field>
          <Button type="submit">Zmień hasło</Button>
        </Form>
      </div>
    </Formik>
  );
};
