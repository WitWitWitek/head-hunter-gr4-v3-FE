import { useFormik } from 'formik';
import { hrSchema } from '../../../validation';
import { Input, Spinner, Button } from '../../ui';
import { hrFormFields } from '../../../constants/hrFormFields';
import styles from './AddHr.module.scss';
import { toast } from 'react-toastify';

const AddHr = () => {
	const {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		touched,
		errors,
		isSubmitting,
	} = useFormik({
		initialValues: {
			email: '',
			fullName: '',
			company: '',
			maxReservedStudents: 1,
		},
		validationSchema: hrSchema,
		onSubmit: (values, { setSubmitting }) => {
			console.log(values);
			// Symulacja wysyłania danych
			setTimeout(() => {
				toast.success('Dane HR zostały wysłane!');
				setSubmitting(false);
			}, 500);
		},
	});

	if (isSubmitting) {
		return <Spinner />;
	}

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h2 className={styles.title}>Dodaj HR</h2>

				{hrFormFields.map((field) => (
					<Input
						key={field.name}
						type={field.type}
						name={field.name}
						description={field.description}
						placeholder={field.placeholder}
						min={field.min}
						max={field.max}
						hasError={
							touched[field.name as keyof typeof touched] &&
							Boolean(errors[field.name as keyof typeof errors])
						}
						errorMessage={
							errors[field.name as keyof typeof errors] as string | undefined
						}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values[field.name as keyof typeof values]}
					/>
				))}

				<div className={styles.submitButton}>
					<Button type="submit" loading={isSubmitting}>
						{isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
					</Button>
				</div>
			</form>
		</div>
	);
};

export default AddHr;
