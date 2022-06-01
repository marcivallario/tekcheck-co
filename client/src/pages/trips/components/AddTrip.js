import Divider from '@mui/material/Divider';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTrip } from '../../../state/slices/tripsSlice';

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
        project_id: 0,
        passenger_id: 0
    })
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

    function discardModal() {
        setFormData({
            user_id: userId,
            depart: '',
            return: '',
            itinerary_sent: false,
            project_id: 0,
            passenger_id: 0
        })
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
                    console.log('NEW TRIP: ', newTrip)
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

    console.log(formData)

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Add Trip</h3>
                </div>
                <div className="modal-body">
                    <form id="add-trip">
                        <div className="choose-passenger">
                            <label htmlFor="passenger_id" className="required">Passenger</label>
                            <select value={(formData.passenger_id)} name="passenger_id" onChange={handleDropdownChange}>
                                <option value={0} disabled hidden>Choose a Passenger</option>
                                    {passengers.map(passenger => {
                                        return <option key={passenger.id} value={parseInt(passenger.id)}>{passenger.legal_first_name} {passenger.legal_last_name}</option>
                                    })}
                            </select>
                        </div>
                        <div className="choose-project">
                            <label htmlFor="project_id" className="required">Project</label>
                            <select value={(formData.project_id)} name="project_id" id="select-project" onChange={handleDropdownChange}>
                                <option value={0} disabled hidden>Choose a Project</option>
                                {projects.map(project => {
                                    return <option key={project.id} value={project.id}>#{project.job_no} "{project.job_name}"</option>
                                })}
                            </select>
                        </div>
                        <div className="depart">
                            <label htmlFor="depart" className="required">Departure Date</label>
                            <input name="depart" type="date" min="1900-01-01" value={formData.depart} onChange={handleChange}/>
                        </div>
                        <div className="return">
                            <label htmlFor="return" className="required">Return Date</label>
                            <input name="return" type="date" min={formData.depart} value={formData.return} onChange={handleChange}/>
                        </div>
                        <div className="itinerary_sent">
                            <label htmlFor="itinerary_sent" className="required">Itinerary Sent?</label>
                            <input name="itinerary_sent" type="checkbox" value={formData.itinerary_sent} onChange={handleCheckboxChange}/>
                        </div>
                        {displayErrors()}
                        <Divider />
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