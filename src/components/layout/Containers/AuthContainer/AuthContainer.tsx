import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../app/api/authSlice";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

export default function AuthContainer() {
  const token = useSelector(selectCurrentToken);

  if (token) {
    return <Outlet />;
  } else {
    toast.error("Zaloguj się");
    return <Navigate to="/" />;
  }
}
