import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Divider from '@mui/material/Divider';
//styles in modal.css

function ViewEditPassenger({ onClose, show, passenger }) {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.currentUser.id)
    const [toggleEdit, setToggleEdit] = useState(false);
    const [ formData, setFormData ] = useState({
        user_id: userId,
        legal_first_name: passenger.legal_first_name,
        legal_last_name: passenger.legal_last_name,
        nickname:  passenger.nickname,
        position:  passenger.position,
        department:  passenger.department,
        cell:  passenger.cell,
        email:  passenger.email,
        dob:  passenger.dob,
        state_of_residence:  passenger.state_of_residence,
        passport:  passenger.passport,
        license:  passenger.license,
        tsa_precheck:  passenger.tsa_precheck,
        global_entry:  passenger.global_entry,
        seat_assignment_pref:  passenger.seat_assignment_pref,
        notes: passenger.notes
    })

    function formatDate() {
        const date = passenger.dob
        const [year, month, day] = date.split('-')
        return [month, day, year].join(' / ')
    }

    if (!show) {
        return null
    }

    if (toggleEdit) {
        return (
            <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <input />
                   <h3 className="modal-title">{passenger.legal_first_name} {passenger.nickname? `"${passenger.nickname}"` : null} {passenger.legal_last_name}</h3>
                </div>
                <div className="modal-body">
                </div>
                <div className="modal-footer">
                    <button className="modal-button" onClick={() => {
                        setToggleEdit(false)
                        onClose()
                        }}>Discard Changes</button>
                    <button className="modal-button modal-save" onClick={onClose}>Save</button>
                </div>
            </div>
        </div>
        )
    } else {
        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header view-edit-passenger">
                        <h3 className="modal-title">{passenger.legal_first_name} {passenger.nickname? `"${passenger.nickname}"` : null} {passenger.legal_last_name}</h3>
                        <h6>{passenger.position}</h6>
                    </div>
                    <div className="modal-body view-edit-body">
                        <div id="passenger-details">
                            <div className="role">
                                <p className="detail-label">Department: </p>
                                <p className="detail-value">{passenger.department}</p>
                                <p className="detail-label">Position: </p>
                                <p className="detail-value">{passenger.position}</p>
                            </div>
                            <div className="contact">
                                <p className="detail-label">Cell: </p>
                                <p className="detail-value"><a href={`tel:${passenger.cell.replace(/[(),-\s]/g, '')}`}>{passenger.cell}</a></p>
                                <p className="detail-label">Email: </p>
                                <p className="detail-value"><a href={`mailto:${passenger.email}`}>{passenger.email}</a></p>
                            </div>
                        </div>
                        <Divider variant="fullWidth" sx={{ margin: "2em 0"}}/>
                           
                            
                        
                        <div id="traveller-details">
                            <div className="travel-detail">
                                <p className="detail-label">DOB (MM/DD/YYYY): </p>
                                <p className="detail-value">{formatDate()}</p>
                            </div>
                            <div className="travel-detail">
                                <p className="detail-label">Seat Preference: </p>
                                <p className="detail-value">{passenger.seat_assignment_pref.split(",").join(", ")}</p>
                            </div>
                            {passenger.state_of_residence ?
                                (<div className="travel-detail">
                                    <p className="detail-label">State of Residence: </p>
                                    <p className="detail-value">{passenger.state_of_residence}</p>
                                </div>
                                ) 
                                : null
                            }
                            {passenger.passport ?
                                (<div className="travel-detail">
                                    <p className="detail-label">Passport: </p>
                                    <p className="detail-value">{passenger.passport}</p>
                                </div>
                                ) 
                                : null
                            }
                            {passenger.license ?
                                (<div className="travel-detail">
                                    <p className="detail-label">License: </p>
                                    <p className="detail-value">{passenger.license}</p>
                                </div>
                                ) 
                                : null
                            }
                            {passenger.tsa_precheck ?
                                (<div className="travel-detail">
                                    <p className="detail-label">TSA Precheck: </p>
                                    <p className="detail-value">{passenger.tsa_precheck}</p>
                                </div>
                                ) 
                                : null
                            }
                            {passenger.global_entry ?
                                (<div className="travel-detail">
                                    <p className="detail-label">Global Entry: </p>
                                    <p className="detail-value">{passenger.global_entry}</p>
                                </div>
                                ) 
                                : null
                            }
                            {passenger.notes ?
                                (<div className="travel-detail">
                                    <p className="detail-label">Notes: </p>
                                    <p className="detail-value">{passenger.notes}</p>
                                </div>
                                ) 
                                : null
                            }
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="modal-button" onClick={onClose}>Close</button>
                        <button className="modal-button modal-save" onClick={() => setToggleEdit(true)}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewEditPassenger;