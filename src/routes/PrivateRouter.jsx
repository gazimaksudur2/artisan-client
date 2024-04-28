import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom/dist";
import Spinner from "../components/Spinner";

const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return (<Spinner/>);
    }

    if(user){
        return(children);
    }else{
        return <Navigate to={'/authenticate'} state={location.pathname}></Navigate>;
    }
};

export default PrivateRouter;