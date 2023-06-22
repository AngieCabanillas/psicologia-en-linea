import { Outlet } from "react-router-dom";
import storage from "../../utils/storage";
import RedirectRoute from "../RedirectRoute";
import MenuUser from "../../../user/MenuUser/MenuUser";

type ProtectedRoutesUserProps = {
  pathname: string;
};

const ProtectedRoutesUser: React.FC<ProtectedRoutesUserProps> = ({
  pathname,
}) => {
  //TODO: Get isAuthenticated from context - useGeneralContext
  const isAuthenticated = true;

  if (!isAuthenticated) {
    storage.clear();
    return <RedirectRoute pathname={pathname} />;
  }

  return (
    <MenuUser>
      <Outlet />
    </MenuUser>
  );
};

export default ProtectedRoutesUser;
