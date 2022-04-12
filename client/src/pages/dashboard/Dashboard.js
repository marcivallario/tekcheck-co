import { Redirect } from 'react-router-dom';
import './dashboard.css';

function Dashboard({ user }) {
    if (!user) {
        return (
            <Redirect to="/" /> 
        )
    }

    return (
        <div id="dashboard">Dashboard Rendered</div>
    )
}

export default Dashboard;