import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import IconButton from '@mui/material/IconButton';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import PageLoading from '../../common/components/PageLoading';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import AddTrip from './components/AddTrip';
import "./trips.css"

function Trips() {
    const trips = useSelector(state => state.trips)
    const [ search, setSearch ] = useState('');
    const [ showAdd, setShowAdd ] = useState(false);
    const filteredTrips = trips.tripsList.filter(trip => {
        const firstName = trip.passenger.legal_first_name.toLowerCase()
        const lastName = trip.passenger.legal_last_name.toLowerCase()
        const searchTerm = search.toLowerCase()
        return firstName.includes(searchTerm) || lastName.includes(searchTerm || search === '')
    }).sort((a,b) => (a.depart < b.depart) ? 1 : -1)

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
       const date = d.getDate()
       const month = months[d.getMonth()]
       return `${month} ${date}, ${year}`
    }

    function updateSeach(e) {
        setSearch(e.target.value);
    }

    if (trips.isLoading === true) {
        return (
            <div id="data-loading">
                <PageLoading height="10vh" width="10vh"/>
            </div> 
        )
    }

    return (
        <div id="projects">
            <div className="table-header">
                 <h1>Trips</h1>
                <input value={search} onChange={updateSeach} placeholder="Search by name..."/>
            </div>
            <TableContainer 
                component={Card}
                sx={{ 
                    overflow: "scroll",
                    boxShadow: "0px 0px 25px 8px rgba(0,0,0,0.1)",
                    borderRadius: "12px",
                    padding: "20px"
                }}
            >
                <Table 
                    sx={{ 
                        overflow: "scroll",
                        borderSpacing: "0 5px",
                        borderCollapse: "separate"
                    }} 
                    size="small" 
                >
                    <TableHead sx={{}}>
                        <TableRow>
                            <TableCell sx={{
                                border: "none", 
                                fontWeight: "700",
                                display: { xs: 'none', sm: 'table-cell' }
                                }}>Job #</TableCell>
                            <TableCell sx={{border: "none", fontWeight: "700"}}>Name</TableCell>
                            <TableCell sx={{
                                border: "none", 
                                fontWeight: "700",
                                display: { xs: 'none', sm: 'table-cell' }
                                }}>Date</TableCell>
                            <TableCell sx={{border: "none", fontWeight: "700"}}>Itinerary Sent?</TableCell>
                            <TableCell sx={{border: "none", fontWeight: "700"}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {trips.tripsList.length === 0? <tr><td className="empty-table" colSpan="6"><p>Click the + to add a trip.</p></td></tr> : filteredTrips.map(trip => {
                            return (
                                <TableRow key={trip.id} sx={{
                                    backgroundColor: "#f9f9f9",
                                    margin: "5px"
                                }}>
                                    <TableCell sx={
                                        {border: "none", 
                                        fontWeight: "500",
                                        display: { xs: 'none', sm: 'table-cell' },
                                        whiteSpace: "nowrap"
                                        }}>#{trip.project.job_no}</TableCell>
                                    <TableCell sx={{border: "none", fontWeight: "500", whiteSpace: "nowrap"}}>{trip.passenger.legal_last_name}, {trip.passenger.legal_first_name}</TableCell>
                                    <TableCell sx={
                                        {border: "none", 
                                        fontWeight: "500",
                                        display: { xs: 'none', sm: 'table-cell' },
                                        whiteSpace: "nowrap"
                                        }}>{formatDate(trip.depart)} - {formatDate(trip.return)}</TableCell>
                                    <TableCell sx={{border: "none", fontWeight: "500", whiteSpace: "nowrap", textAlign: "center"}}>
                                            {trip.itinerary_sent ? <CheckBoxRoundedIcon sx={{ color: "#72DCE8"}}/> : <CheckBoxOutlineBlankRoundedIcon sx={{ color: "#72DCE8"}}/>}
                                    </TableCell>
                                    <TableCell sx={{border: "none", fontWeight: "500"}}>
                                        <div className="actions">
                                            <IconButton><VisibilityRoundedIcon sx={{ color: "#FF7E3D", cursor: "pointer"}} /></IconButton>

                                            <IconButton><DeleteRoundedIcon sx={{ color: "#FF7E3D", cursor: "pointer"}}/></IconButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <button className="add-record" onClick={() => setShowAdd(true)}>+</button>
            <AddTrip onClose={() => setShowAdd(false)} show={showAdd} />
        </div>
    )
}

export default Trips;