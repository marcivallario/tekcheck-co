import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import PageLoading from '../../common/components/PageLoading';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import "./trips.css"

function Trips() {
    const trips = useSelector(state => state.trips)
    const [ search, setSearch ] = useState('');
    const filteredTrips = trips.tripsList.filter(trip => {
        const firstName = trip.passenger.legal_first_name.toLowerCase()
        const lastName = trip.passenger.legal_last_name.toLowerCase()
        const searchTerm = search.toLowerCase()
        return firstName.includes(searchTerm) || lastName.includes(searchTerm || search === '')
    });

    function updateSeach(e) {
        setSearch(e.target.value);
    }

    if (trips.tripsList.length === 0) {
        return <p>Add a Project</p>
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
                        {filteredTrips.map(trip => {
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
                                        }}>{trip.depart} - {trip.return}</TableCell>
                                    <TableCell sx={{border: "none", fontWeight: "500", whiteSpace: "nowrap"}}>
                                            {trip.itinerary_sent ? <CheckBoxRoundedIcon sx={{ color: "#72DCE8"}}/> : <CheckBoxOutlineBlankRoundedIcon sx={{ color: "#72DCE8"}}/>}
                                    </TableCell>
                                    <TableCell sx={{border: "none", fontWeight: "500"}}>View</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <button className="add-record">+</button>
        </div>
    )
}

export default Trips;