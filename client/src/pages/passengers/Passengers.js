import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './passengers.css'

function Passengers() {
    const dispatch = useDispatch(); 
    const passengers = useSelector(state => state.passengers)
    const [ search, setSearch ] = useState('');
    let filteredPassengers = passengers.passengersList.filter(passenger => {
        const firstName = passenger.legal_first_name.toLowerCase()
        const lastName = passenger.legal_last_name.toLowerCase()
        const searchTerm = search.toLowerCase()
        return firstName.includes(searchTerm) || lastName.includes(searchTerm || search === '')
    }).sort((a,b) => (a.legal_last_name > b.legal_last_name) ? 1 : -1)

    function updateSeach(e) {
        setSearch(e.target.value);
    }

    if (passengers.passengersList.length === 0) {
        return <p>Add a Passenger</p>
    } 

    if (passengers.isLoading === true) {
        return <h1>Loading...</h1>
    }

    return (
        <div id="passengers">
            <div className="table-header">
                 <h1>Passengers</h1>
                <input value={search} onChange={updateSeach} placeholder="Filter by name"/>
            </div>
            <TableContainer 
                component={Card}
                sx={{ 
                    padding: "10px",
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
                            <TableCell sx={{border: "none", fontWeight: "700"}}>Name</TableCell>
                            <TableCell sx={{
                                border: "none", 
                                fontWeight: "700",
                                display: { xs: 'none', sm: 'table-cell' }
                                }}>Position</TableCell>
                            <TableCell sx={{
                                border: "none", 
                                fontWeight: "700",
                                display: { xs: 'none', sm: 'table-cell' }
                                }}>Department</TableCell>
                            <TableCell sx={{
                                border: "none", 
                                fontWeight: "700",
                                display: { xs: 'none', sm: 'table-cell' }
                                }}>Cell</TableCell>
                            <TableCell sx={{
                                border: "none", 
                                fontWeight: "700", 
                                display: { xs: 'none', sm: 'table-cell' }
                                }}>Email</TableCell>
                            <TableCell sx={{border: "none", fontWeight: "700"}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredPassengers.map(pass => {
                            return (
                                <TableRow key={pass.id} sx={{
                                    backgroundColor: "#f9f9f9",
                                    margin: "5px"
                                }}>
                                    <TableCell sx={{border: "none", fontWeight: "500", whiteSpace: "nowrap"}}>{pass.legal_last_name}, {pass.legal_first_name}</TableCell>
                                    <TableCell sx={{
                                        border: "none", 
                                        fontWeight: "500",
                                        display: { xs: 'none', sm: 'table-cell' },
                                        whiteSpace: "nowrap"
                                        }}>{pass.position}</TableCell>
                                    <TableCell sx={
                                        {border: "none", 
                                        fontWeight: "500",
                                        display: { xs: 'none', sm: 'table-cell' },
                                        whiteSpace: "nowrap"
                                        }}>{pass.department}</TableCell>
                                    <TableCell sx={{
                                        border: "none", 
                                        fontWeight: "500",
                                        display: { xs: 'none', sm: 'table-cell' },
                                        whiteSpace: "nowrap"
                                        }}><a href={`tel:${pass.cell}`}>{pass.cell}</a></TableCell>
                                    <TableCell sx={{
                                        border: "none", 
                                        fontWeight: "500",
                                        display: { xs: 'none', sm: 'table-cell' },
                                        whiteSpace: "nowrap"
                                        }}><a href={`mailto:${pass.email}`}>{pass.email}</a></TableCell>
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

export default Passengers;