import { Outlet } from "react-router-dom";
import RedirectRoute from "../RedirectRoute";

type GuestRouteUserProps = {
  pathname: string;
};

const GuestRouteUser: React.FC<GuestRouteUserProps> = ({ pathname }) => {
  //TODO: Get isAuthenticated from context - useGeneralContext
  const isAuthenticated = true;

  if (isAuthenticated) {
    return <RedirectRoute pathname={pathname} />;
  }

  return (
    <div className="login-provider">
      <Outlet />
    </div>
  );
};

export default GuestRouteUser;
