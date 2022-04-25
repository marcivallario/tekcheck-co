import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import "./boardingpass.css";

function BoardingPass() {
    return (
        <div class="boarding-pass">
            <header>
                <div class="passenger">
                    <small>Passenger</small>
                    <strong>Doe, John</strong>
                </div>
                <div class="flight">
                    <small>flight</small>
                    <strong>FL 123</strong>
                </div>
            </header>
            <section class="cities">
                <div class="city">
                    <small>Dep City Name</small>
                    <strong>DCN</strong>
                </div>
                <ArrowRightAltIcon sx={{ 
                    color: "black",
                    fontSize: "35px",
                    position: "relative",
                    top: "11px" }}/>
                <div class="city">
                    <small>Arr City Name</small>
                    <strong>ACN</strong>
                </div>
            </section>
            <section class="infos">
                <div class="details">
                    <div class="box">
                        <small>Conf</small>
                        <strong>C3</strong>
                    </div>
                    <div class="box">
                        <small>Seat</small>
                        <strong>14B</strong>
                    </div>
                </div>
                <div class="times">
                    <div class="box">
                        <small>Departure</small>
                        <strong>11:35</strong>
                    </div>
                    <div class="box">
                        <small>Arrival</small>
                        <strong>13:50</strong>
                    </div>
                </div>
            </section>
            <section class="strap">
                <div class="box">
                    <div class="passenger">
                        <small>Airline</small>
                        <strong>Delta Airlines</strong>
                    </div>
                    <div class="date">
                        <small>Date</small>
                        <strong>Mon, 1 Jan 2015</strong>
                    </div>
                </div>
                
                    <FlightTakeoffIcon sx={{ 
                    color: "black",
                    fontSize: "80px" }}/>
                
            </section>
        </div>
    )
}

export default BoardingPass;