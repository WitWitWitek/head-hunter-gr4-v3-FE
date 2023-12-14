import { Outlet } from "react-router-dom";
import { NavbarMain, HrMenu } from "../../components/features";
import ContainerColumnFlex from "../../components/layout/Containers/ContainerColumnFlex";

export const HrView = () => {
  return (
    <div>
      <NavbarMain />
      <ContainerColumnFlex>
        <HrMenu />
        <Outlet />
      </ContainerColumnFlex>
    </div>
  );
};
