import { useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { selectCurrentRole } from './app/api/authSlice';
import getRoutes from './routes';

export const App = () => {
	const role = useSelector(selectCurrentRole);
	const router = createBrowserRouter(getRoutes(role));

	return <RouterProvider router={router} />;
};
