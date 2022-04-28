import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import Home from '../../pages/homepage/Home';
import Navigation from './Navigation';

const ProtectedRoute = ({component, ...rest}) => {
    const { currentUser } = useSelector((state) => state.user)
    console.log('User in ProtectedRoute: ', currentUser.id)
    return (
        <Route 
            {...rest} 
            render={props => currentUser.id ? <Navigation component={component} {...props} /> : <Home />} 
        />
    );
};


export default ProtectedRoute;