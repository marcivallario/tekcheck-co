import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProtectedRoute = ({component: Component, ...rest}) => {
    const { currentUser } = useSelector((state) => state.user)
    return (
        <Route 
            {...rest} 
            render={props => currentUser.id ? <Component {...props} /> : <Redirect to="/" />} 
        />
    );
};


export default ProtectedRoute;