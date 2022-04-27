import Card from '@mui/material/Card';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import './metrics.css'

function TotalProjects() {
    return (
        <Card sx={{ borderRadius: "12px", boxShadow: "0px 0px 25px 8px rgba(0,0,0,0.1)"}}>
            <div className="metric-wrapper">
                <small className="metric-head">Total Projects</small>
                <div className="metric-details">
                    <p className="metric-stat">34</p>
                    <FolderRoundedIcon sx={{ color: "#72DCE8", fontSize: "70px"}} />
                </div>
            </div>
        </Card>
    )
}

export default TotalProjects;