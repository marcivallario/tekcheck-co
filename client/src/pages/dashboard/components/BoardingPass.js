import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import "./boardingpass.css";

function BoardingPass({ flight, passenger }) {
    const formatDate = (dateString) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
       const d = new Date(dateString)
       const year = d.getFullYear()
       const date = d.getDate() + 1
       const month = months[d.getMonth()]
       return `${month} ${date}, ${year}`
    }

    return (
        <div className="boarding-pass">
            <header>
                <div className="passenger">
                    <small>Passenger</small>
                    <strong>{passenger.legal_last_name}, {passenger.legal_first_name}</strong>
                </div>
                <div className="flight">
                    <small>flight</small>
                    <strong>{flight.flight_no}</strong>
                </div>
            </header>
            <section className="cities">
                <div className="city">
                    <small>Dep City Name</small>
                    <strong>{flight.dep_airport}</strong>
                </div>
                <ArrowRightAltRoundedIcon sx={{ 
                    color: "black",
                    fontSize: "35px",
                    position: "relative",
                    top: "11px" }}/>
                <div className="city">
                    <small>Arr City Name</small>
                    <strong>{flight.arr_airport}</strong>
                </div>
            </section>
            <section className="infos">
                <div className="details">
                    <div className="box">
                        <small>Conf</small>
                        <strong>{flight.confirmation}</strong>
                    </div>
                    <div className="box">
                        <small>Seat</small>
                        <strong>{flight.seat}</strong>
                    </div>
                </div>
                <div className="times">
                    <div className="box">
                        <small>Departure</small>
                        <strong>{flight.dep_time.substring(11,16)}</strong>
                    </div>
                    <div className="box">
                        <small>Arrival</small>
                        <strong>{flight.arr_time.substring(11,16)}</strong>
                    </div>
                </div>
            </section>
            <section className="strap">
                <div className="box">
                    <div className="passenger">
                        <small>Airline</small>
                        <strong>{flight.airline}</strong>
                    </div>
                    <div className="date">
                        <small>Date</small>
                        <strong>{formatDate(flight.dep_time.substring(0,10))}</strong>
                    </div>
                </div>
                
                    <FlightTakeoffRoundedIcon sx={{ 
                    color: "#FF7E3D",
                    fontSize: "70px",
                    marginRight: "23px" }}/>
                
            </section>
        </div>
    )
}

export default BoardingPass;