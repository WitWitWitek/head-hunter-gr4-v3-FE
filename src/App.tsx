import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/App.scss";
import { LoginPage, RegisterPage, NotFound } from "./pages";
import { StudentForm } from "./pages/StudentFormPage/StudentForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/studentForm",
    element: <StudentForm />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
