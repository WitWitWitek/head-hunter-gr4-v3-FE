import {
  LoginPage,
  RegisterPage,
  NotFound,
  HrView,
  StudentView,
  AdminView,
  RemindPage,
  ConfirmUser,
} from "./pages";
import AuthContainer from "./components/layout/Containers/AuthContainer/AuthContainer";
import {
  Cv,
  StudentForm,
  StudentPanel,
  AllStudents,
  ToTalk,
} from "./components/features";
import { RouteObject } from "react-router-dom";

export const getRoutes = (role: string | null): RouteObject[] => [
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <NotFound />,
  },
  {
    element: <AuthContainer />,
    children: [
      {
        path: "admin",
        element: role === "admin" ? <AdminView /> : <NotFound />,
      },
      {
        path: "student",
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
        path: "hr",
        element: role === "hr" ? <HrView /> : <NotFound />,
        children: [
          {
            index: true,
            element: <AllStudents />,
          },
          {
            path: "to-talk",
            element: <ToTalk />,
          },
        ],
      },
    ],
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "remind",
    element: <RemindPage />,
  },
  {
    path: "confirm",
    element: <ConfirmUser />,
  },
];

export default getRoutes;
