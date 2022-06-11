import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FlightRoundedIcon from '@mui/icons-material/FlightRounded';

function ViewFlight({ flights, toDate }) {
    function tConvert(time) {
        time = time.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { 
            time = time.slice(1); 
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; 
            time[0] = +time[0] % 12 || 12; 
        }
        return time.join(''); 
    }

    return (
        <div className="view-flights">
            <Table 
                sx={{ 
                    overflow: "scroll",
                    borderSpacing: "0 0px",
                    borderCollapse: "separate",
                    width: "100%"
                }} 
                size="small" 
            >
                <TableHead>
                    <TableRow sx={{backgroundColor: "#72DCE8"}}>
                        <TableCell 
                        colSpan={8}
                        sx={{
                            borderBottom: "none", 
                            fontWeight: "700",
                            color: "white",
                            fontSize: "1.25em"
                        }}>
                            <FlightRoundedIcon sx={{ 
                                color: "white", 
                                marginRight: "1em"
                            }}/>
                            Flights
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc",
                            }}>Leg</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Airline</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Flight No.</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Date</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Departure</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Arrival</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Seat</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Confirmation</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {flights.map(flight => {
                        return (
                            <TableRow key={flight.id}>
                                <TableCell sx={{fontSize: "0.75em"}}>{flight.leg}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{flight.airline}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{flight.flight_no}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{toDate(flight.dep_time.slice(0,10))}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{tConvert(flight.dep_time.slice(11,16))}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{tConvert(flight.arr_time.slice(11,16))}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{flight.seat}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{flight.confirmation}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default ViewFlight;