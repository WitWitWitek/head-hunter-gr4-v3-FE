import { Formik, Form, Field, FieldProps } from 'formik';
import { createPasswordSchema } from '../../validation';
import logo from '../../assets/images/logoMegaK.webp';
import LoginStyle from '../LoginPage/Login.module.scss';
import { Register } from '../../types/userType';
import { Button, Input } from '../../components/ui';
import { Link } from 'react-router-dom';

interface FormValues {
	loginEmail: string;
	registerPassword: string;
	confirmPassword: string;
}

export const RegisterPage = () => {
	return (
		<Formik
			initialValues={{
				loginEmail: '',
				registerPassword: '',
				confirmPassword: '',
			}}
			onSubmit={(values: Register) => {
				console.log(values);
			}}
			validationSchema={createPasswordSchema}
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
							/>
						)}
					</Field>

					<Field name="registerPassword">
						{({ field, form }: FieldProps<string, FormValues>) => (
							<Input
								{...field}
								hasError={
									form.touched.registerPassword &&
									!!form.errors.registerPassword
								}
								errorMessage={form.errors.registerPassword}
								placeholder="Hasło"
								type="password"
							/>
						)}
					</Field>

					<Field name="confirmPassword">
						{({ field, form }: FieldProps<string, FormValues>) => (
							<Input
								{...field}
								hasError={
									form.touched.confirmPassword && !!form.errors.confirmPassword
								}
								errorMessage={form.errors.confirmPassword}
								placeholder="Powtórz hasło"
								type="password"
							/>
						)}
					</Field>

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
