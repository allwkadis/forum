import { useLocation, Navigate } from "react-router";
import { userSelectors } from "../../../../entities/User";
import { useAppSelector } from "../../StoreProvider";

interface RequiredAuthProps {
  children: JSX.Element;
}

export const RequiredAuth = ({
  children,
}: RequiredAuthProps): JSX.Element | null => {
  let auth = useAppSelector(userSelectors.selectAuthData);
  let location = useLocation();

  if (!auth) {
    return <Navigate to={"/main"} state={{ from: location }} replace />;
  }

  return children;
};
