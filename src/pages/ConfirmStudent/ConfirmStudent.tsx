import { useNavigate, useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import ConfirmForm from './ConfirmForm';
import { confirmStudentPasswordSchema } from '../../validation';
import { ConfirmUserFormType } from '../../types/ConfirmStudentType';
import { useConfirmUserMutation } from '../../app/api/userApiSlice';
import logo from '../../assets/images/logoMegaK.webp';
import styles from './ConfirmStudent.module.scss';

export function ConfirmUser() {
	const [searchParams] = useSearchParams();
	const token = searchParams.get('token');
	const [confirmUser, { isSuccess }] = useConfirmUserMutation();
	const navigate = useNavigate();

	useEffect(() => {
		if (isSuccess) navigate(`/`);
	}, [isSuccess, navigate]);

	const formik = useFormik<ConfirmUserFormType>({
		initialValues: {
			password: '',
			confirmPassword: '',
		},
		validationSchema: confirmStudentPasswordSchema,
		onSubmit: async (values) => {
			if (token) {
				await confirmUser({ token, password: values.password });
			} else {
				toast.error('Token jest wymagany.');
			}
		},
	});

	return (
		<div className={styles.wrapper}>
			<img src={logo} alt="Logo MegaK" className={styles.logo} />
			<h1 className={styles.heading}>Potwierdź swoje konto w Head Hunter:</h1>
			<div className={styles.container}>
				<ConfirmForm formik={formik} />
			</div>
		</div>
	);
}
