import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import { useSelector, useDispatch } from 'react-redux';
import { removePassenger } from "../../state/slices/passengersSlice"
import { useState } from 'react';
import AddPassenger from './components/AddPassenger';
import ViewEditPassenger from './components/ViewEditPassenger';
import PageLoading from '../../common/components/PageLoading';
import './passengers.css'

function Passengers() {
    const dispatch = useDispatch(); 
    const passengers = useSelector(state => state.passengers)
    const [ search, setSearch ] = useState('');
    const [ showAdd, setShowAdd ] = useState(false);
    const [ showViewEdit, setShowViewEdit ] = useState(false);
    const [ selectedPassenger, setSelectedPassenger ] = useState({
        user_id: '',
        legal_first_name: '',
        legal_last_name: '',
        nickname: '',
        position: '',
        department: '',
        cell: '',
        email: '',
        dob: '',
        state_of_residence: '',
        passport: '',
        license: '',
        tsa_precheck: '',
        global_entry: '',
        seat_assignment_pref: '',
        notes: ''
    })

    let filteredPassengers = passengers.passengersList.filter(passenger => {
        const firstName = passenger.legal_first_name.toLowerCase()
        const lastName = passenger.legal_last_name.toLowerCase()
        const searchTerm = search.toLowerCase()
        return firstName.includes(searchTerm) || lastName.includes(searchTerm || search === '')
    }).sort((a,b) => (a.legal_last_name.toLowerCase() > b.legal_last_name.toLowerCase()) ? 1 : -1)

    function updateSearch(e) {
        setSearch(e.target.value);
    }

    function handleDelete(pass) {
        fetch(`/passengers/${pass.id}`, {
            method: 'DELETE'
            })
        .then(dispatch(removePassenger(pass)));
    }

    if (passengers.isLoading === true) {
        return (
            <div id="passengers-loading">
                <PageLoading height="10vh" width="10vh"/>
            </div> 
        )
    }

    return (
        <div id="passengers">
            <div className="table-header">
                <h1>Passengers</h1>
                <input value={search} onChange={updateSearch} placeholder="Filter by name"/>
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
                        {passengers.passengersList.length === 0? <td className="empty-table" colspan="6"><p>Click the + to add a passenger.</p></td> : filteredPassengers.map(pass => {
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
                                        }}><a href={`tel:${pass.cell.replace(/[(),-\s]/g, '')}`}>{pass.cell}</a></TableCell>
                                    <TableCell sx={{
                                        border: "none", 
                                        fontWeight: "500",
                                        display: { xs: 'none', sm: 'table-cell' },
                                        whiteSpace: "nowrap"
                                        }}><a href={`mailto:${pass.email}`}>{pass.email}</a></TableCell>
                                    <TableCell sx={{border: "none", fontWeight: "500"}}>
                                        <div className="passenger-actions">
                                            <IconButton onClick={() => {
                                            setShowViewEdit(true)
                                            setSelectedPassenger(pass)
                                            }}><VisibilityRoundedIcon sx={{ color: "#FF7E3D", cursor: "pointer"}} /></IconButton>

                                            <IconButton onClick={() => handleDelete(pass)}><DeleteRoundedIcon sx={{ color: "#FF7E3D", cursor: "pointer"}}/></IconButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <button className="add-record" onClick={() => setShowAdd(true)}>+</button>
            <AddPassenger onClose={() => setShowAdd(false)} show={showAdd} />
            <ViewEditPassenger onClose={() => setShowViewEdit(false)} show={showViewEdit} passenger={selectedPassenger}/>
        </div>
    )
    
}

export default Passengers;