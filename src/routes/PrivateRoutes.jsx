import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <Loading></Loading> ;
    }
    if(user && user.email){ 
        return children;
    }
    return (
        <Navigate to="/auth/login" replace></Navigate>
    );
};

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoutes;