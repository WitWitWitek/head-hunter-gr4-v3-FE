import { Formik, Form, Field, FieldProps } from "formik";
import { loginSchema } from "../../validation";
import logo from "../../assets/images/logoMegaK.webp";
import LoginStyle from "./Login.module.scss";
import { LoginProps } from "../../types/userType";
import { Button, Input } from "../../components/ui";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../app/api/authApiSlice";

interface FormValues {
  loginEmail: string;
  loginPassword: string;
}

export const LoginPage = () => {
  const [login, { isSuccess }] = useLoginMutation();

  return (
    <Formik
      initialValues={{
        loginEmail: "",
        loginPassword: "",
      }}
      onSubmit={async (values: LoginProps) =>
        await login({
          email: values.loginEmail,
          password: values.loginPassword,
        })
      }
      validationSchema={loginSchema}
    >
      <div className={LoginStyle.user}>
        <Form className={LoginStyle.login} noValidate>
          <img className={LoginStyle.login__logo} src={logo} alt="logo MegaK" />

          <Field name="loginEmail">
            {({ field, form }: FieldProps<string, FormValues>) => (
              <Input
                {...field}
                hasError={form.touched.loginEmail && !!form.errors.loginEmail}
                errorMessage={form.errors.loginEmail}
                placeholder="E-mail"
                type="email"
                className={LoginStyle.login__input}
              />
            )}
          </Field>

          <Field name="loginPassword">
            {({ field, form }: FieldProps<string, LoginProps>) => (
              <Input
                {...field}
                hasError={
                  form.touched.loginPassword && !!form.errors.loginPassword
                }
                errorMessage={form.errors.loginPassword}
                placeholder="Hasło"
                type="password"
                className={`${LoginStyle.login__input}`}
              />
            )}
          </Field>
          <Link to="/remind" className={LoginStyle.login__remember}>
            Zapomniałeś hasła?
          </Link>
          <div className={LoginStyle.login__box}>
            <p className={LoginStyle.login__box__text}>
              Nie masz konta?
              <Link
                className={LoginStyle.login__box__text__link}
                to="/register"
              >
                Zarejestruj się
              </Link>
            </p>
            <Button type="submit">Zaloguj się</Button>
          </div>
        </Form>
        {isSuccess && <p>Zalogowano</p>}
      </div>
    </Formik>
  );
};
