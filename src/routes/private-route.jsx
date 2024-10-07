
import { Navigate,Outlet } from "react-router-dom";
import PropTypes from "prop-types";


export function  PrivateRoute() {
    const user = localStorage.getItem('devburger:userData')
    if(!user) {
        return <Navigate to="/login"replace />;
    }
    return(
        <>
        <Outlet />
        </>
    );
    
}
PrivateRoute.propTypes = {
    component: 
    PropTypes.oneOfType([PropTypes.func,
        PropTypes.element]),
};