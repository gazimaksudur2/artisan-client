import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom/dist";

const PrivateRouter = ({children}) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    
    if(user){
        return(children);
    }else{
        return <Navigate to={'/authenticate'} state={location.pathname}></Navigate>;
    }
};

export default PrivateRouter;