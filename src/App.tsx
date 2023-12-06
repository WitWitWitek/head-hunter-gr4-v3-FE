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
} from "./pages";
import { selectCurrentRole } from "./app/api/authSlice";
import AuthContainer from "./components/layout/Containers/AuthContainer/AuthContainer";
import { RemindPage } from "./pages/RemaindPage/RemaindPage";
// import { ChangePassword } from "./pages/ChangePassword/ChangePassword";

export const App = () => {
  const role = useSelector(selectCurrentRole);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <NotFound />,
    },
    {
      element: <AuthContainer />,
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
      path: "/test-admin",
      element: <AdminView />,
    },
    {
      path: "/remind",
      element: <RemindPage />,
    },
    {
      path: "/test-student",
      element: <StudentView />,
      children: [
        {
          index: true,
          element: <StudentPanel />,
        },
        {
          path: "edit-cv",
          element: <StudentForm />,
        },
        {
          path: "view-cv",
          element: <Cv />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
