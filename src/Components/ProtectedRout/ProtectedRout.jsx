
import { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRout = ({children}) => {
    const location = useLocation(children)
    const {user}= useContext(authContext)
    if(user){
        return children
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
    
};

export default ProtectedRout;