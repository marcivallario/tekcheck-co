import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import "./boardingpass.css";

function BoardingPass() {
    return (
        <div className="boarding-pass">
            <header>
                <div className="passenger">
                    <small>Passenger</small>
                    <strong>Doe, John</strong>
                </div>
                <div className="flight">
                    <small>flight</small>
                    <strong>FL 123</strong>
                </div>
            </header>
            <section className="cities">
                <div className="city">
                    <small>Dep City Name</small>
                    <strong>DCN</strong>
                </div>
                <ArrowRightAltIcon sx={{ 
                    color: "black",
                    fontSize: "35px",
                    position: "relative",
                    top: "11px" }}/>
                <div className="city">
                    <small>Arr City Name</small>
                    <strong>ACN</strong>
                </div>
            </section>
            <section className="infos">
                <div className="details">
                    <div className="box">
                        <small>Conf</small>
                        <strong>C3</strong>
                    </div>
                    <div className="box">
                        <small>Seat</small>
                        <strong>14B</strong>
                    </div>
                </div>
                <div className="times">
                    <div className="box">
                        <small>Departure</small>
                        <strong>11:35</strong>
                    </div>
                    <div className="box">
                        <small>Arrival</small>
                        <strong>13:50</strong>
                    </div>
                </div>
            </section>
            <section className="strap">
                <div className="box">
                    <div className="passenger">
                        <small>Airline</small>
                        <strong>Delta Airlines</strong>
                    </div>
                    <div className="date">
                        <small>Date</small>
                        <strong>Mon, 1 Jan 2015</strong>
                    </div>
                </div>
                
                    <FlightTakeoffIcon sx={{ 
                    color: "#FF7E3D",
                    fontSize: "80px" }}/>
                
            </section>
        </div>
    )
}

export default BoardingPass;