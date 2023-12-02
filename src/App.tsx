import { useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/App.scss";
import {
  LoginPage,
  RegisterPage,
  NotFound,
  HrView,
  StudentView,
  AdminView,
  StudentForm,
} from "./pages";
import { RootState } from "./app/store";

export const App = () => {
  const role = useSelector((state: RootState) => state.auth.role);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/admin",
          element: role === "admin" ? <AdminView /> : <NotFound />,
        },
        {
          path: "/student",
          element: role === "student" ? <StudentView /> : <NotFound />,
        },
        { path: "/hr", element: role === "hr" ? <HrView /> : <NotFound /> },
      ],
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

  return <RouterProvider router={router} />;
};
