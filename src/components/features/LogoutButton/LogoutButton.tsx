import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui";
import { useLogoutMutation } from "../../../app/api/authApiSlice";

export const LogoutButton = () => {
  const navigate = useNavigate();
  const [signout, { isLoading }] = useLogoutMutation();

  const logOut = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      await signout("");
      navigate("/");
    },
    [navigate, signout]
  );

  return (
    <Button fullWidth={true} onClick={logOut} loading={isLoading}>
      Wyloguj
    </Button>
  );
};
