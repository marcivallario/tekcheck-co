import Card from '@mui/material/Card';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';

import { useSelector } from 'react-redux';
import './metrics.css'

function TotalProjects() {
    const projects = useSelector(state => state.projects)
    return (
        <Card sx={{ borderRadius: "12px", boxShadow: "0px 0px 25px 8px rgba(0,0,0,0.1)"}}>
            <div className="metric-wrapper">
                <small className="metric-head">Total Projects</small>
                <div className="metric-details">
                    <p className="metric-stat">{projects.projectsList.length}</p>
                    <FolderRoundedIcon sx={{ color: "#72DCE8", fontSize: "70px"}} />
                </div>
            </div>
        </Card>
    )
}

export default TotalProjects;