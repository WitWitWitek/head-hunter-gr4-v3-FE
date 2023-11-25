import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/App.scss';
import { LoginPage, RegisterPage, NotFound } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginPage />,
		errorElement: <NotFound />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
]);

export const App = () => {
	return <RouterProvider router={router} />;
};
