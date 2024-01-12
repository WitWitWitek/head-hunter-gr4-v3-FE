import { Field, FieldProps, Form, Formik } from "formik";
import { Button } from "../../components/ui/Button/Button";
import { Input } from "../../components/ui/Input/Input";
import { changePasswordSchema } from "../../validation/userValidationSchema";
import { useUpdateUserPasswordMutation } from "../../app/api/userApiSlice";

interface changePassowrdValues {
  oldPassword: string;
  changedPassword: string;
  confirmChangedPassword: string;
}

export const ChangePassword = () => {
  const [updatePassword] = useUpdateUserPasswordMutation();

  return (
    <Formik
      initialValues={{
        oldPassword: "",
        changedPassword: "",
        confirmChangedPassword: "",
      }}
      onSubmit={async (values: changePassowrdValues, actions) => {
        await updatePassword({
          oldPassword: values.oldPassword,
          newPassword: values.confirmChangedPassword,
        });
        actions.resetForm();
      }}
      validationSchema={changePasswordSchema}
    >
      <div>
        <Form noValidate>
          <Field name="oldPassword">
            {({ field, form }: FieldProps<string, changePassowrdValues>) => (
              <Input
                {...field}
                description="Stare hasło"
                hasError={form.touched.oldPassword && !!form.errors.oldPassword}
                errorMessage={form.errors.oldPassword}
                type="password"
              />
            )}
          </Field>
          <Field name="changedPassword">
            {({ field, form }: FieldProps<string, changePassowrdValues>) => (
              <Input
                {...field}
                description="Nowe hasło"
                hasError={
                  form.touched.changedPassword && !!form.errors.changedPassword
                }
                errorMessage={form.errors.changedPassword}
                type="password"
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
                type="password"
              />
            )}
          </Field>
          <Button type="submit">Zmień hasło</Button>
        </Form>
      </div>
    </Formik>
  );
};
