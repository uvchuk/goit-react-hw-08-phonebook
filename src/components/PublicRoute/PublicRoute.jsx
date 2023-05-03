import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectIsLoggedIn);
  const { state } = useLocation();
  return !isAuth ? children : <Navigate to={state ? state : '/contacts'} />;
};

export default PublicRoute;
