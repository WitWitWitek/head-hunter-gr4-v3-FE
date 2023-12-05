import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui';
import { toast } from 'react-toastify';

export const LogoutButton = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const logOut = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			e.preventDefault();
			setLoading(true);
			console.log('Próba wylogowania...');

			//  symulujemy wylogowanie zeby zobaczy czy działa
			setTimeout(() => {
				console.log('Wylogowano pomyślnie.');
				toast.success('Wylogowano pomyślnie.');
				navigate('/');
				// toast.error('Błąd wylogowania.');
			}, 1000);
		},
		[navigate]
	);

	return (
		<Button fullWidth={true} onClick={logOut} loading={loading}>
			Wyloguj
		</Button>
	);
};
