import {Navigate,Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    console.log("the auth is",auth);

    if(auth && auth.token)
    {
        console.log("user authenticated");
        return <Outlet/>
    }
    else{
        console.log("use not authencicated")
        return <Navigate to="/" />
    }
};

export default PrivateRoutes;