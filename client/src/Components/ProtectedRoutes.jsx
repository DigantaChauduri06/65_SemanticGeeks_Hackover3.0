import { Navigate, Outlet } from "react-router-dom";
import Login from "./Login";

const useAuth = () => {
  const user = { isLoggedIn: false };
  return user && user.isLoggedIn;
};
function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}
export default ProtectedRoutes;
