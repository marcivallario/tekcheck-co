import Card from '@mui/material/Card';
import AirplaneTicketRoundedIcon from '@mui/icons-material/AirplaneTicketRounded';

import { useSelector } from 'react-redux';
import './metrics.css'

function CompletedTrips() {
    const trips = useSelector(state => state.trips)
    return (
        <Card sx={{ borderRadius: "12px", boxShadow: "0px 0px 25px 8px rgba(0,0,0,0.1)"}}>
            <div className="metric-wrapper">
                <small className="metric-head">Completed Trips</small>
                <div className="metric-details">
                    <p className="metric-stat">{trips.tripsList.filter(trip => trip.return < new Date()).length}</p>
                    <AirplaneTicketRoundedIcon sx={{ color: "#72DCE8", fontSize: "70px", }} />
                </div>
            </div>
        </Card>
    )
}

export default CompletedTrips;