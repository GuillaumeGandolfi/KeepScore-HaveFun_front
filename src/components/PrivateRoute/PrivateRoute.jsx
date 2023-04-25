import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({
    redirectPath = '/index',
    children,
  }) => {
    const { isLogged } = useSelector(state => state.login)
    
    if (!isLogged) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };

  export default PrivateRoute