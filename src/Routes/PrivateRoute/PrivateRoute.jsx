import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import PropTypes from "prop-types";


const PrivateRoute = ({children: routes}) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext)

    if(loading) {
        return <span className="flex items-center justify-center loading loading-spinner text-error loading-lg"></span>
    }
    if(user){
        return routes;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}