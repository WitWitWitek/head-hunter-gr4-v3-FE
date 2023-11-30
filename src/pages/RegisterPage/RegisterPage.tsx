import { Formik, Form } from "formik";
import { createPasswordSchema } from "../../validation";
import logo from "../../assets/images/logoMegaK.webp";
import LoginStyle from "../LoginPage/Login.module.scss";
import { Register } from "../../types/userType";
import { Button, Input } from "../../components/ui";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <Formik
      initialValues={{
        loginEmail: "",
        registerPassword: "",
        confirmPassword: "",
      }}
      onSubmit={(values: Register) => {
        console.log(values);
      }}
      validationSchema={createPasswordSchema}
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
            hasError
            placeholder="Hasło"
            name="registerPassword"
            type="password"
            className={LoginStyle.login__input}
          />
          <Input
            placeholder="Powtórz hasło"
            name="confirmPassword"
            type="password"
            className={LoginStyle.login__input}
          />
          <div className={LoginStyle.login__box}>
            <p className={LoginStyle.login__box__text}>
              Masz już konto?
              <Link className={LoginStyle.login__box__text__link} to="/">
                Zaloguj się
              </Link>
            </p>
            <Button type="submit">Zarejestruj</Button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};
