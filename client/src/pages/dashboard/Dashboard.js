import Card from '@mui/material/Card';
import BoardingPass from './components/BoardingPass';
import './dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="row">
                <div className="col">
                    <div id="upcoming-flights">
                        <div className="cardheader">
                            <h3>Upcoming Flights</h3>
                            <a href="#">See all</a>
                        </div>
                        <div id="boarding-wrapper">
                            <BoardingPass />
                            <BoardingPass />
                            <BoardingPass />
                            <BoardingPass />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div id="active-projects">
                        <div className="cardheader">
                            <h3>Active Projects</h3>
                            <a href="#">See all</a>
                        </div>
                        <Card>
                            <div className="project">
                                <p>test</p>
                            </div>
                            <div className="project">
                                <p>test</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="row" id="metrics"> 
                <div className="col">
                    <Card>Metric 1</Card>
                </div>
                <div className="col">
                    <Card>Metric 2</Card>
                </div>
                <div className="col">
                    <Card>Metric 3</Card>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Card>Map</Card>
                </div>
                <div className="col">
                    <Card>Recent Trips</Card>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;