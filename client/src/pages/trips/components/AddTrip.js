import Divider from '@mui/material/Divider';
import FlightRoundedIcon from '@mui/icons-material/FlightRounded';
import LocalTaxiRoundedIcon from '@mui/icons-material/LocalTaxiRounded';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';


import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTrip } from '../../../state/slices/tripsSlice';
import './addtrip.css'
import AddFlight from './AddFlight';
import AddTranspo from './AddTranspo';
import AddAcc from './AddAcc';

function AddTrip({ show, onClose }) {
    const dispatch = useDispatch();     
    const passengers = useSelector(state => state.passengers.passengersList)
    const projects = useSelector(state => state.projects.projectsList)
    const userId = useSelector(state => state.user.currentUser.id)
    const [ formData, setFormData ] = useState({
        user_id: userId,
        depart: '',
        return: '',
        itinerary_sent: false,
        project_id: null,
        passenger_id: null
    })
    const [ flightFormData, setFlightFormData ] = useState([]) 
    const [ transpoFormData, setTranspoFormData ] = useState([]) 
    const [ accFormData, setAccFormData ] = useState([])
    const [ errors, setErrors ] = useState(null)

    function handleDropdownChange(e) {
        const key = e.target.name;
        const value = parseInt(e.target.value);
        setFormData({...formData, [key]: value})
    }
    
    function handleCheckboxChange(e) {
        setFormData({...formData, itinerary_sent: !formData.itinerary_sent})
    }

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]: value})
    }
    
    function addAnotherFlight(e) {
        setFlightFormData([...flightFormData, {
            leg: '',
            airline: '',
            flight_no: '',
            dep_airport: '',
            dep_time: '',
            arr_airport: '',
            arr_time: '',
            seat: '',
            confirmation: '',
            notes: ''
        }])
    }

    function addAnotherTranspo(e) {
        setTranspoFormData([...transpoFormData, {
            direction: '',
            date: '',
            trans_mode: '',
            confirmation: '',
            notes: ''
        }])
    }

    function AddAnotherAcc(e) {
        setAccFormData([...accFormData, {
            checkin: '',
            checkout: '',
            acc_type: '',
            name: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            zip: '',
            confirmation: '',
            phone: '',
            notes: ''
        }])
    }

    function discardModal() {
        setFormData({
            user_id: userId,
            depart: '',
            return: '',
            itinerary_sent: false,
            project_id: 0,
            passenger_id: 0
        })
        setFlightFormData([])
        setTranspoFormData([])
        setAccFormData([])
        setErrors(null)
        onClose()
    }

    function saveTrip() {
        fetch('/trips', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
            })
        .then(resp => {
            if (!resp.ok) {
                resp.json().then(resp => setErrors([...resp.errors]))
            } else {
                resp.json().then(newTrip => {
                    if (flightFormData.length > 0) {
                        const updatedFlightAdds = flightFormData.map(flight => {
                            flight.trip_id = newTrip.id
                            return flight
                        })
                        updatedFlightAdds.forEach(flight => {
                            fetch('/flights', {
                                method: 'POST',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(flight)
                            }).then(resp => resp.json())
                            .then(newFlight => {
                                console.log('submitted')
                            })
                        })
                    }

                    if (transpoFormData.length > 0) {
                        const updatedTranspoAdds = transpoFormData.map(transpo => {
                            transpo.trip_id = newTrip.id
                            return transpo
                        })
                        updatedTranspoAdds.forEach(transpo => {
                            fetch('/transportations', {
                                method: 'POST',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(transpo)
                            }).then(resp => resp.json())
                            .then(newTranspo => {
                                transpo = newTranspo
                            })
                        })
                        newTrip.transportations = updatedTranspoAdds;
                    } else {
                        newTrip.transportations = [];
                    }

                    if (accFormData.length > 0) {
                        const updatedAccAdds = accFormData.map(acc => {
                            acc.trip_id = newTrip.id
                            return acc
                        })
                        updatedAccAdds.forEach(acc => {
                            fetch('/accommodations', {
                                method: 'POST',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(acc)
                            }).then(resp => resp.json())
                            .then(newAcc => {
                                console.log('submitted')
                            })
                        })
                    }
                    newTrip.flights = flightFormData;
                    
                    newTrip.accommodations = accFormData;
                    dispatch(addTrip(newTrip))
                    discardModal()
                })
            }
        })
    }

    function displayErrors() {
        if (errors) {
            return (
                <div id="passenger-add-error" className="error-container">
                    {errors.map((err, index) => {
                        return <p key={index} className="error">{err}</p>
                    })}
                </div>
            )
        } else {
            return null
        }
    }

    if (!show) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Add Trip</h3>
                </div>
                <div className="modal-body">
                    <form id="add-trip">
                        <div className="set-detail">
                            <div className="choose-passenger">
                                <label htmlFor="passenger_id" className="required">Passenger</label>
                                <select value={(formData.passenger_id || 0)} name="passenger_id" onChange={handleDropdownChange}>
                                    <option value={0} disabled hidden>Choose a Passenger</option>
                                        {passengers.map(passenger => {
                                            return <option key={passenger.id} value={parseInt(passenger.id)}>{passenger.legal_first_name} {passenger.legal_last_name}</option>
                                        })}
                                </select>
                            </div>
                            <div className="choose-project">
                                <label htmlFor="project_id" className="required">Project</label>
                                <select value={(formData.project_id || 0)} name="project_id" id="select-project" onChange={handleDropdownChange}>
                                    <option value={0} disabled hidden>Choose a Project</option>
                                    {projects.map(project => {
                                        return <option key={project.id} value={project.id}>#{project.job_no} "{project.job_name}"</option>
                                    })}
                                </select>
                            </div>
                            <div className="trip-detail">
                                <label htmlFor="depart" className="required">Departure Date</label>
                                <input name="depart" type="date" min="1900-01-01" value={formData.depart} onChange={handleChange}/>
                            </div>
                            <div className="trip-detail">
                                <label htmlFor="return" className="required">Return Date</label>
                                <input name="return" type="date" min={formData.depart} value={formData.return} onChange={handleChange}/>
                            </div>
                            <div className="trip-detail">
                                <label htmlFor="itinerary_sent" >Itinerary Sent?</label>
                                <input name="itinerary_sent" type="checkbox" value={formData.itinerary_sent} onChange={handleCheckboxChange}/>
                            </div>
                            {displayErrors()}
                        </div>

                        <Divider sx={{marginTop: "1em", marginBottom: "1em"}}/>
                        <div className="add-buttons">
                            <div className="trip-add-detail" onClick={addAnotherFlight}>
                                <FlightRoundedIcon sx={{ color: "#FF7E3D"}}/>
                                <h6>Add Flight</h6>
                            </div>
                            <div className="trip-add-detail" onClick={addAnotherTranspo}>
                                <LocalTaxiRoundedIcon sx={{ color: "#FF7E3D"}}/>
                                <h6>Add Transportation</h6>
                            </div>
                            <div className="trip-add-detail" onClick={AddAnotherAcc}>
                                <HotelRoundedIcon sx={{ color: "#FF7E3D"}}/>
                                <h6>Add Accomodation</h6>
                            </div>
                        </div>
                        <AddFlight flightFormData={flightFormData} setFlightFormData={setFlightFormData}/>
                        <AddTranspo transpoFormData={transpoFormData} setTranspoFormData={setTranspoFormData}/>
                        <AddAcc accFormData={accFormData} setAccFormData={setAccFormData} />
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="modal-button" onClick={discardModal}>Discard</button>
                    <button className="modal-button modal-save" onClick={saveTrip}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddTrip;