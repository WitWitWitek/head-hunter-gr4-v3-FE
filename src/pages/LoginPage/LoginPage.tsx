import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logoMegaK.webp";
import LoginCSS from "./Login.module.scss";
import { useLoginMutation } from "../../app/api/authApiSlice";

export const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [login, { isLoading, isSuccess }] = useLoginMutation();

  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <div className={LoginCSS.user}>
      <form onSubmit={sendForm} className={LoginCSS.login}>
        <img className={LoginCSS.login__logo} src={logo} alt="logo MegaK" />
        <input
          className={LoginCSS.login__input}
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={LoginCSS.login__input}
          type="password"
          placeholder="Hasło"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/remind" className={LoginCSS.login__remember}>
          Zapomniałeś hasła?
        </Link>
        <div className={LoginCSS.login__box}>
          <p className={LoginCSS.login__box__text}>
            Nie masz konta?
            <Link className={LoginCSS.login__box__text__link} to="/register">
              Zarejestruj się
            </Link>
          </p>
          <button className="login__box__btn btn" type="submit">
            {isLoading ? "..." : "Zaloguj się"}
          </button>
        </div>
      </form>
      {isSuccess && <p>Zalogowano</p>}
    </div>
  );
};
