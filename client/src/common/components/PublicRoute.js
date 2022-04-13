import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, user, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            user ? <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;