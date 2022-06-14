import BoardingPass from './components/BoardingPass';
import AliceCarousel from 'react-alice-carousel';
import ActiveProjects from './components/ActiveProjects';
import CompletedTrips from './components/CompletedTrips';
import TotalProjects from './components/TotalProjects';
import TotalPassengers from './components/TotalPassengers';
import TripsInProgress from './components/TripsInProgress';
import { useSelector } from 'react-redux';
import './dashboard.css';

function Dashboard() {
    const trips = useSelector(state => state.trips.tripsList)

    function checkTime(dep_time) {
        const then = new Date(dep_time);
        const now = new Date();

        const msBetweenDates = (then.getTime() - now.getTime());
        const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);

        if (hoursBetweenDates < 24 && hoursBetweenDates > 0) {
            return true
        } else {
            return false
        }
    }

    let upcomingTrips = [];
    trips.forEach(trip => {
        if (trip.flights.length > 0) {
            let upcomingFlights = trip.flights.filter(flight => checkTime(flight.dep_time))
            if (upcomingFlights.length > 0) upcomingTrips.push({...trip, flights: upcomingFlights})
        }
    })

    let items = [];
    upcomingTrips.forEach(trip => {
        trip.flights.map(flight => {
            items.push(<BoardingPass key={flight.id} flight={flight} passenger={trip.passenger} />)
        })
    })
    
    return (
        <div id="dashboard">
            <div className="row">
                <div className="col-12 col-xl-6">
                    <div id="upcoming-flights">
                        <div className="cardheader">
                            <h3>Flights Within 24 Hours</h3>
                        </div>
                        <div id="boarding-wrapper">
                            {items.length > 0 ?
                            <AliceCarousel 
                                mouseTracking 
                                autoWidth 
                                disableDotsControls
                                keyboardNavigation
                                paddingLeft={27}
                                paddingRight={57}
                                items={items} 
                            /> : <h5>No upcoming flights!</h5>}
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