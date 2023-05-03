import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectIsLoggedIn);
  const location = useLocation();
  return isAuth ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
