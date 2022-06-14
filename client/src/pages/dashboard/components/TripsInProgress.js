import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { useSelector } from 'react-redux';
// inherits style from activeprojects.css

function TripsInProgress() {
    const trips = useSelector(state => state.trips.tripsList)
    const filteredTrips = trips.filter(trip => {
        let start = new Date(trip.depart)
        let end = new Date(trip.return)
        let today = new Date()
        return (start < today) && (end > today)
    })
    console.log(filteredTrips)

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

    return(
        <TableContainer 
            component={Card}
            sx={{ 
                height: "100%",
                overflow: "scroll",
                boxShadow: "0px 0px 25px 8px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                padding: "20px"
            }}
        >
            <Table 
                sx={{ 
                    width: "100%",
                    overflow: "scroll",
                    borderSpacing: "0 5px",
                    borderCollapse: "separate"
                }} 
                size="small" 
            >
                <TableHead sx={{}}>
                    <TableRow>
                        <TableCell sx={{border: "none", fontWeight: "700"}}>Name</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "700"}}>Project</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "700"}}>Dates</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "700"}}>Flight?</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredTrips.length > 0? filteredTrips.map(trip => {
                        return (<TableRow sx={{
                                backgroundColor: "#f9f9f9",
                                margin: "5px",
                            }} key={trip.id}>
                                <TableCell sx={{border: "none", fontWeight: "500"}}>{trip.passenger.legal_first_name} {trip.passenger.legal_last_name}</TableCell>
                                <TableCell sx={{border: "none", fontWeight: "500"}}>#{trip.project.job_no}</TableCell>
                                <TableCell sx={{border: "none", fontWeight: "500"}}>{formatDate(trip.depart)} - {formatDate(trip.return)}</TableCell>
                                <TableCell sx={{border: "none"}}>
                                    {trip.flights.length > 0? <CheckRoundedIcon sx={{ color: "#FF7E3D"}}/> : null}
                                </TableCell>
                            </TableRow>
                        )
                    }) : <tr><td className="empty-table" colSpan="4"><p>No trips in progress!</p></td></tr>}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TripsInProgress;

