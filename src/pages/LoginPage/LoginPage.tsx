import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logoMegaK.webp';
import LoginCSS from './Login.module.scss';

export const LoginPage = () => {
	const sendForm = (e: SyntheticEvent) => {
		e.preventDefault();
	};
	return (
		<div className={LoginCSS.user}>
			<form onSubmit={sendForm} className={LoginCSS.login}>
				<img className={LoginCSS.login__logo} src={logo} alt="logo MegaK" />
				<input
					className={LoginCSS.login__input}
					type="email"
					placeholder="E-mail"
				/>
				<input
					className={LoginCSS.login__input}
					type="password"
					placeholder="Hasło"
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
						Zaloguj się
					</button>
				</div>
			</form>
		</div>
	);
};
