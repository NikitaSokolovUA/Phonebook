import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldReditect = !isLoggedIn && !isRefreshing;

  return shouldReditect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
