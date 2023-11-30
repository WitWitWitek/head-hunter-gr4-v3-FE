import { Formik, Form } from "formik";
import { loginSchema } from "../../validation";
import logo from "../../assets/images/logoMegaK.webp";
import LoginStyle from "./Login.module.scss";
import { Login } from "../../types/userType";
import { Button, Input } from "../../components/ui";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <Formik
      initialValues={{
        loginEmail: "",
        loginPassword: "",
      }}
      onSubmit={(values: Login) => {
        console.log(values);
      }}
      validationSchema={loginSchema}
    >
      <div className={LoginStyle.user}>
        <Form className={LoginStyle.login}>
          <img className={LoginStyle.login__logo} src={logo} alt="logo MegaK" />
          <Input
            placeholder="E-mail"
            name="loginEmail"
            type="email"
            className={LoginStyle.login__input}
          />
          <Input
            placeholder="Hasło"
            name="loginPassword"
            type="password"
            className={LoginStyle.login__input}
          />
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
      </div>
    </Formik>
  );
};
