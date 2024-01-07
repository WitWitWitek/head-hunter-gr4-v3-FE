import { FormikProps } from 'formik';
import { Button, Input } from '../../components/ui';
import { ConfirmUserFormType } from '../../types/ConfirmStudentType';
import styles from './ConfirmStudent.module.scss';

interface ConfirmFormProps {
	formik: FormikProps<ConfirmUserFormType>;
}

const ConfirmForm: React.FC<ConfirmFormProps> = ({ formik }) => {
	return (
		<form className={styles.form} onSubmit={formik.handleSubmit}>
			<Input
				description="Podaj hasło"
				hasError={formik.touched.password && !!formik.errors.password}
				errorMessage={formik.errors.password}
				{...formik.getFieldProps('password')}
				type="password"
			/>
			<Input
				description="Powtórz hasło"
				hasError={
					formik.touched.confirmPassword && !!formik.errors.confirmPassword
				}
				errorMessage={formik.errors.confirmPassword}
				{...formik.getFieldProps('confirmPassword')}
				type="password"
			/>
			<Button type="submit" loading={formik.isSubmitting}>
				{formik.isSubmitting ? 'Wysyłanie danych...' : 'Aktywuj konto'}
			</Button>
		</form>
	);
};

export default ConfirmForm;
