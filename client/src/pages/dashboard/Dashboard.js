import BoardingPass from './components/BoardingPass';
import AliceCarousel from 'react-alice-carousel';
import ActiveProjects from './components/ActiveProjects';
import CompletedTrips from './components/CompletedTrips';
import TotalProjects from './components/TotalProjects';
import TotalPassengers from './components/TotalPassengers';
import TripsInProgress from './components/TripsInProgress';
import './dashboard.css';

let items = [
    <BoardingPass />,
    <BoardingPass />,
    <BoardingPass />,
    <BoardingPass />
]

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

function Dashboard() {
    return (
        <div id="dashboard">
            <div className="row">
                <div className="col-12 col-xl-6">
                    <div id="upcoming-flights">
                        <div className="cardheader">
                            <h3>Flights Within 24 Hours</h3>
                        </div>
                        <div id="boarding-wrapper">
                            <AliceCarousel 
                                mouseTracking 
                                autoWidth 
                                disableDotsControls
                                keyboardNavigation
                                paddingLeft={27}
                                paddingRight={57}
                                responsive={responsive}
                                items={items} 
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-6">
                    <div id="active-projects">
                        <div className="cardheader">
                            <h3>Active Projects</h3>
                            <a className="see-all" href="/projects">See all</a>
                        </div>
                        <div id="activeprojects-wrapper" className="dash-widget">
                            <ActiveProjects />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" id="metrics"> 
                <div className="col-12 col-lg-4">
                    <CompletedTrips />
                </div>
                <div className="col-12 col-lg-4">
                    <TotalProjects />
                </div>
                <div className="col-12 col-lg-4">
                    <TotalPassengers />
                </div>
            </div>
            <div className="row" id="current-trips">
                <div className="col-12">
                    <div id="trips-in-progress">
                        <div className="cardheader">
                            <h3>Trips In Progress</h3>
                            <a className="see-all" href="/trips">See all</a>
                        </div>
                        <div id="currenttrips-wrapper" className="dash-widget">
                            <TripsInProgress />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;