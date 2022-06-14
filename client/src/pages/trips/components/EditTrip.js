import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    updateTrip,
    removeFlight,
    updateFlight,
    updateTranspo,
    removeTranspo,
    updateAcc,
    removeAcc
 } from '../../../state/slices/tripsSlice';
import Divider from '@mui/material/Divider';
import AddFlight from './AddFlight';
import AddTranspo from './AddTranspo';
import AddAcc from './AddAcc';

function EditTrip({ setToggleEdit, trip, onClose}) {
    const dispatch = useDispatch();
    const passengers = useSelector(state => state.passengers.passengersList)
    const projects = useSelector(state => state.projects.projectsList)
    const [ formData, setFormData ] = useState({
        depart: '',
        return: '',
        itinerary_sent: '',
        project_id: null,
        passenger_id: null
    })
    const [ flightFormData, setFlightFormData ] = useState([]) 
    const [ transpoFormData, setTranspoFormData ] = useState([]) 
    const [ accFormData, setAccFormData ] = useState([])
    const [ delFlights, setDelFlights ] = useState([])
    const [ delTranspos, setDelTranspos] = useState([])
    const [ delAccs, setDelAccs ] = useState([])
    const [ errors, setErrors ] = useState(null)

    useEffect(() => {
        setFormData({
            id: trip.id,
            depart: trip.depart,
            return: trip.return,
            itinerary_sent: trip.itinerary_sent,
            project_id: trip.project_id,
            passenger_id: trip.passenger_id
        })

        if (trip.transportations.length > 0) {
            const datedTranspo = trip.transportations.map(transpo => {
                return { ...transpo, date: transpo.date.substring(0,10) };
            })
            setTranspoFormData(datedTranspo)
        }

        if (trip.flights.length > 0) {
            const datedFlights = trip.flights.map(flight => {
                return { ...flight, dep_time: flight.dep_time.substring(0,16), arr_time: flight.arr_time.substring(0,16) }
            })
            setFlightFormData(datedFlights)
        }

        if (trip.accommodations.length > 0) {
            const datedAcc = trip.accommodations.map(acc => {
                return { ...acc, checkin: acc.checkin.substring(0,16), checkout: acc.checkout.substring(0,16)}
            })
            setAccFormData(datedAcc)
        }
    }, [trip])

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

    function handleUpdate() {
        fetch(`/trips/${formData.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => {
            if (!resp.ok) {
                resp.json().then(resp => setErrors(resp.errors))
            } else {
                resp.json().then(updatedTrip => {
                    if (flightFormData.length > 0) {
                        flightFormData.forEach(flight => {
                            fetch(`/flights/${flight.id}`, {
                                method: 'PATCH',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(flight)
                            }).then(resp => resp.json())
                            .then(updatedFlight => {
                                dispatch(updateFlight(updatedFlight))
                            })
                        })
                    }

                    if (delFlights.length > 0) {
                        delFlights.forEach(flight => {
                            fetch(`/flights/${flight.id}`, {
                                method: 'DELETE'
                                })
                            .then(dispatch(removeFlight(flight)));
                        })
                    }

                    if (transpoFormData.length > 0) {
                        transpoFormData.forEach(transpo => {
                            fetch(`/transportations/${transpo.id}`, {
                                method: 'PATCH',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(transpo)
                            }).then(resp => resp.json())
                            .then(updatedTranspo => {
                                dispatch(updateTranspo(updatedTranspo))
                            })
                        })
                    }

                    if (delTranspos.length > 0) {
                        delTranspos.forEach(transpo => {
                            fetch(`/transportations/${transpo.id}`, {
                                method: 'DELETE'
                                })
                            .then(dispatch(removeTranspo(transpo)));
                        })
                    }

                    if (accFormData.length > 0) {
                        accFormData.forEach(acc => {
                            fetch(`/accommodations/${acc.id}`, {
                                method: 'PATCH',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(acc)
                            }).then(resp => resp.json())
                            .then(updatedAcc => {
                                dispatch(updateAcc(updatedAcc))
                            })
                        })
                    }

                    if (delAccs.length > 0) {
                        delAccs.forEach(acc => {
                            fetch(`/accommodations/${acc.id}`, {
                                method: 'DELETE'
                                })
                            .then(dispatch(removeAcc(acc)));
                        })
                    }
                    updatedTrip.flights = flightFormData
                    updatedTrip.transportations = transpoFormData
                    updatedTrip.accommodations = accFormData
                    dispatch(updateTrip(updatedTrip))
                    onClose()
                    setToggleEdit(false)
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

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Edit Trip</h3>
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
                                <input name="itinerary_sent" type="checkbox" checked={formData.itinerary_sent} onChange={handleCheckboxChange}/>
                            </div>
                            {displayErrors()}
                        </div>

                        <Divider sx={{marginTop: "1em", marginBottom: "1em"}}/>

                        <AddFlight flightFormData={flightFormData} setFlightFormData={setFlightFormData} delFlights={delFlights} setDelFlights={setDelFlights} />
                        <AddTranspo transpoFormData={transpoFormData} setTranspoFormData={setTranspoFormData} delTranspos={delTranspos} setDelTranspos={setDelTranspos}/>
                        <AddAcc accFormData={accFormData} setAccFormData={setAccFormData} delAccs={delAccs} setDelAccs={setDelAccs}/>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="modal-button" onClick={() => setToggleEdit(false)}>Discard</button>
                    <button className="modal-button modal-save" onClick={handleUpdate}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default EditTrip;