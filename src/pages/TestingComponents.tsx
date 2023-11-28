import {
	Avatar,
	Button,
	BackwardsBtn,
	TextArea,
	Input,
	Text,
	Select,
} from '../components/ui';
import { useState } from 'react';
import { useFormik } from 'formik';

const MyForm1 = () => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setInputValue(e.target.value);
	};

	return (
		<form>
			<TextArea
				description="Opis dla tego pola :P"
				name="opis"
				value={inputValue}
				onChange={handleChange}
				placeholder="Wpisz swój opis.... "
			/>
		</form>
	);
};

const MyForm2 = () => {
	const formik = useFormik({
		initialValues: {
			text: '',
			password: '',
			email: '',
			number: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
		// Można dodać walidację tutaj
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<Input
				name="text"
				type="text"
				placeholder="Wpisz cos..."
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.text}
				description="Tekst"
			/>
			<Input
				name="password"
				type="password"
				placeholder="Wpisz cos..."
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.password}
				description="Hasło"
			/>
			<Input
				name="email"
				type="email"
				placeholder="Wpisz cos..."
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.email}
				description="Email"
			/>
			<Input
				name="number"
				type="number"
				placeholder="Wpisz cos..."
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.number}
				description="Numer"
			/>
			<Button type="submit">Wyślij</Button>
		</form>
	);
};

const MyForm3 = () => {
	const [selectedOption, setSelectedOption] = useState('');

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(e.target.value);
	};

	const options = ['Opcja 1', 'Opcja 2', 'Opcja 3'];

	return (
		<form>
			<Select
				description="Wybierz opcję"
				name="mySelect"
				options={options}
				onChange={handleSelectChange}
				value={selectedOption}
			/>
		</form>
	);
};

const gridStyle = {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: '2rem',
	border: '1px solid white',
	padding: '2rem',
};

const TestingComponents = () => {
	return (
		<div style={gridStyle}>
			<div>
				<p style={{ color: 'white' }}>Avatarki - do NAV i do CV</p>

				<Avatar />

				<Avatar type="large" githubUsername="kozerka" />

				<Avatar githubUsername="kozerka" />
			</div>
			<div>
				<Text weight="bold" color="gray">
					To jest pogrubiony szary tekst.
				</Text>
				<Text weight="light" color="white">
					To jest lekki biały tekst.
				</Text>
			</div>

			<div>
				<p style={{ color: 'white' }}>
					Przykład button - disabled i loading z mozliwoscia przekazania
					dowolnego tekstu
				</p>
				<Button loading={true}>Loading...</Button>
				<br />
				<Button loading={false}>Submit</Button>
				<br />
				<Button status="disabled">Disabled</Button>
			</div>
			<div>
				<p style={{ color: 'white' }}>
					Przykład button - dla powrotu - juz działa
				</p>
				<BackwardsBtn />
			</div>
			<div>
				<p style={{ color: 'white' }}>Integracja dla TEXTAREA</p>
				<MyForm1 />
			</div>
			<div>
				<p style={{ color: 'white' }}>
					Integracja dla inputa z formik przyklad{' '}
				</p>
				<MyForm2 />
			</div>
			<div>
				<p style={{ color: 'white' }}>Przykład selecta</p>
				<MyForm3 />
			</div>
		</div>
	);
};

export default TestingComponents;
