import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();

  if (!user?.uid) {
    return <Navigate to="/" />;
  }

  return children;
};
export default ProtectedRoute;
