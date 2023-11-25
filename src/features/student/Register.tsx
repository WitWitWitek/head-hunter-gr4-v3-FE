import { SyntheticEvent, useState } from "react";
import LoginCSS from "./style/Login.module.css";
import logo from "../../assets/images/logoMegaK.webp";
import { Link } from "react-router-dom";
import { Spinner } from "../utils/Spinner";
export const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [resultInfo, setResultInfo] = useState<string | null>(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const updateForm = (key: string, value: string) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };
  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3001/user/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResultInfo(
        `Zostałeś pomyślnie zarejestrowany pod e-mailem ${data.email}.`
      );
    } finally {
      setLoading(false);
      setForm({ password: "", email: "" });
    }
  };
  if (loading) {
    return <Spinner />;
  }
  if (resultInfo !== null) {
    return (
      <div className="result-info">
        <p className="result-info__text">{resultInfo}</p>
        <button
          className="result-info__btn btn"
          onClick={() => setResultInfo(null)}
        >
          Add another one
        </button>
      </div>
    );
  }
  return (
    <div className={LoginCSS.user}>
      <form onSubmit={sendForm} className={LoginCSS.login}>
        <img className={LoginCSS.login__logo} src={logo} alt="logo MegaK" />
        <input
          className={LoginCSS.login__input}
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={(e) => updateForm("email", e.target.value)}
        />
        <input
          className={LoginCSS.login__input}
          type="password"
          placeholder="Hasło"
          value={form.password}
          onChange={(e) => updateForm("password", e.target.value)}
        />
        <div className={LoginCSS.login__box}>
          <p className={LoginCSS.login__box__text}>
            Masz już konto?
            <Link className={LoginCSS.login__box__text__link} to="/">
              Zaloguj się
            </Link>
          </p>
          <button className="login__box__btn btn" type="submit">
            Zarejestruj
          </button>
        </div>
      </form>
    </div>
  );
};
