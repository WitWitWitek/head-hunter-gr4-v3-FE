import { Field, Formik, FieldProps, Form } from "formik";
import { passwordForgottenSchema } from "../../validation";
import { Button, Input } from "../../components/ui";
import Style from "./RemindPage.module.scss";
interface RemindValues {
  userEmail: string;
  confirmEmail: string;
}

export const RemindPage = () => {
  return (
    <Formik
      initialValues={{
        userEmail: "",
        confirmEmail: "",
      }}
      onSubmit={(values: RemindValues) => {
        console.log(values);
      }}
      validationSchema={passwordForgottenSchema}
    >
      <div className={Style.wrapper}>
        <Form className={Style.remindForm} noValidate>
          <Field name="userEmail">
            {({ field, form }: FieldProps<string, RemindValues>) => (
              <Input
                {...field}
                description="Podaj e-mail"
                hasError={form.touched.userEmail && !!form.errors.userEmail}
                errorMessage={form.errors.userEmail}
                type="email"
              />
            )}
          </Field>
          <Field name="confirmEmail">
            {({ field, form }: FieldProps<string, RemindValues>) => (
              <Input
                {...field}
                description="Powtórz e-mail"
                hasError={
                  form.touched.confirmEmail && !!form.errors.confirmEmail
                }
                errorMessage={form.errors.confirmEmail}
                type="email"
              />
            )}
          </Field>
          <Button type="submit">Przypomnij hasło</Button>
        </Form>
      </div>
    </Formik>
  );
};
