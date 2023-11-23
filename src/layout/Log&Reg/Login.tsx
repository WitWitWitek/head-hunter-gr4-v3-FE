import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logoMegaK.webp";
import "./style/login.css";

export const Login = () => {
  const sendForm = (e: SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div className="user">
      <form onSubmit={sendForm} className="login">
        <img className="login__logo" src={logo} alt="logo MegaK" />
        <input className="login__input" type="email" placeholder="E-mail" />
        <input className="login__input" type="password" placeholder="Hasło" />
        <p className="login__remember">Zapomniałeś hasła?</p>
        <div className="login__box">
          <p className="login__box__text">
            Nie masz konta?
            <Link className="login__box__text__link" to="/register">
              Zarejestruj się
            </Link>
          </p>
          <button className="login__box__btn btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
