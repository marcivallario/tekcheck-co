import Card from '@mui/material/Card';
import AirplaneTicketRoundedIcon from '@mui/icons-material/AirplaneTicketRounded';
import './metrics.css'

function CompletedTrips() {
    return (
        <Card sx={{ borderRadius: "12px", boxShadow: "0px 0px 25px 8px rgba(0,0,0,0.1)"}}>
            <div className="metric-wrapper">
                <small className="metric-head">Completed Trips</small>
                <div className="metric-details">
                    <p className="metric-stat">112</p>
                    <AirplaneTicketRoundedIcon sx={{ color: "#72DCE8", fontSize: "70px", }} />
                </div>
            </div>
        </Card>
    )
}

export default CompletedTrips;