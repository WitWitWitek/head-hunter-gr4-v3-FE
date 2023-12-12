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
import { StudentPreference } from "./pages/StudentView/StudentPreference";
import {
  Cv,
  StudentForm,
  StudentPanel,
  AllStudents,
  ToTalk,
  StudentCV,
} from "./components/features";
import ConfirmUser from "./pages/ConfirmStudent/ConfirmStudent";
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
        {
          path: "/hr",
          element: role === "hr" ? <HrView /> : <NotFound />,
          children: [
            {
              index: true,
              element: <AllStudents />,
            },
            { path: "to-talk", element: <ToTalk /> },
          ],
        },
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
      path: "/preference",
      element: <StudentPreference />,
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
    {
      path: "/test-hr",
      element: <HrView />,
      children: [
        {
          index: true,
          element: <AllStudents />,
        },
        { path: "to-talk", element: <ToTalk /> },
      ],
    },
    {
      path: "/test-hr/student-cv/:studentId",
      element: <StudentCV />,
    },
    {
      path: "/confirm",
      element: <ConfirmUser />,
    },
  ]);

  return <RouterProvider router={router} />;
};
