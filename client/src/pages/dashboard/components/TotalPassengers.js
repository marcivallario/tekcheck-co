import Card from '@mui/material/Card';
import PersonIcon from '@mui/icons-material/Person';

import { useSelector } from 'react-redux';
import './metrics.css'

function TotalPassengers() {
    const passengers = useSelector(state => state.passengers)
    return (
        <Card sx={{ borderRadius: "12px", boxShadow: "0px 0px 25px 8px rgba(0,0,0,0.1)"}}>
            <div className="metric-wrapper">
                <small className="metric-head">Total Passengers</small>
                <div className="metric-details">
                    <p className="metric-stat">{passengers.passengersList.length}</p>
                    <PersonIcon sx={{ color: "#72DCE8", fontSize: "70px", }}/>
                </div>
            </div>
        </Card>
    )
}

export default TotalPassengers;