import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/App.scss';
import { LoginPage, RegisterPage, NotFound, TestingComponents } from './pages';

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
	{
		path: '/testing-components',
		element: <TestingComponents />,
	},
]);

export const App = () => {
	return <RouterProvider router={router} />;
};
