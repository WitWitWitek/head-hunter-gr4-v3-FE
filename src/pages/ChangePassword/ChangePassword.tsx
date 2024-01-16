import { useState } from 'react';
import { Field, FieldProps, Form, Formik } from 'formik';
import { Button } from '../../components/ui/Button/Button';
import { Input } from '../../components/ui/Input/Input';
import { changePasswordSchema } from '../../validation/userValidationSchema';
import { useUpdateUserPasswordMutation } from '../../app/api/userApiSlice';
import styles from './ChangePassword.module.scss';
import { RiEyeOffLine, RiEyeLine } from 'react-icons/ri';

interface ChangePassowrdValues {
	oldPassword: string;
	changedPassword: string;
	confirmChangedPassword: string;
}

export const ChangePassword = () => {
	const [updatePassword] = useUpdateUserPasswordMutation();
	const [showOldPassword, setShowOldPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const renderPasswordField = (
		name: keyof ChangePassowrdValues, // Typowanie jako klucz interfejsu ChangePassowrdValues
		description: string,
		showPassword: boolean,
		setShowPassword: React.Dispatch<React.SetStateAction<boolean>> // Poprawne typowanie dla funkcji zmieniającej stan
	) => (
		<Field name={name}>
			{({ field, form }: FieldProps<string, ChangePassowrdValues>) => (
				<div className={styles.inputIconContainer}>
					<Input
						{...field}
						description={description}
						hasError={form.touched[name] && !!form.errors[name]}
						errorMessage={form.errors[name]}
						type={showPassword ? 'text' : 'password'}
					/>
					<span
						onClick={() => setShowPassword(!showPassword)}
						className={styles.passwordIcon}
					>
						{showPassword ? (
							<RiEyeOffLine size={20} />
						) : (
							<RiEyeLine size={20} />
						)}
					</span>
				</div>
			)}
		</Field>
	);

	return (
		<div className={styles.formContainer}>
			<h2 className={styles.title}>Zmiana hasła użytkownika</h2>
			<Formik
				initialValues={{
					oldPassword: '',
					changedPassword: '',
					confirmChangedPassword: '',
				}}
				onSubmit={async (values: ChangePassowrdValues, actions) => {
					await updatePassword({
						oldPassword: values.oldPassword,
						newPassword: values.confirmChangedPassword,
					});
					actions.resetForm();
				}}
				validationSchema={changePasswordSchema}
			>
				<div className={styles.form}>
					<Form noValidate>
						{renderPasswordField(
							'oldPassword',
							'Stare hasło',
							showOldPassword,
							setShowOldPassword
						)}
						{renderPasswordField(
							'changedPassword',
							'Nowe hasło',
							showNewPassword,
							setShowNewPassword
						)}
						{renderPasswordField(
							'confirmChangedPassword',
							'Powtórz nowe hasło',
							showConfirmPassword,
							setShowConfirmPassword
						)}
						<Button type="submit">Zmień hasło</Button>
					</Form>
				</div>
			</Formik>
		</div>
	);
};
