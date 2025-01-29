import { useLocation, Navigate } from "react-router";

interface RequiredAuthProps {
  children: JSX.Element;
}

export const RequiredAuth = ({
  children,
}: RequiredAuthProps): JSX.Element | null => {
  // let auth = useAppSelector(userSelectors.selectAuthData);
  let auth = localStorage.getItem("user");
  let location = useLocation();

  if (!auth) {
    console.log(1);
    return <Navigate to={"/main"} state={{ from: location }} replace />;
  }

  return children;
};
