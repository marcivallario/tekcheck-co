import "./addpassenger.css"

function AddPassenger({ show, onClose }) {
    if (!show) {
        return null
    }

    let states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
    const options = states.map((state, index) => {
        return <option key={index} value={state}>{state}</option>
    })

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Add Passenger</h3>
                </div>
                <div className="modal-body">
                    <form id="add-passenger">
                        <div className="name">
                            <label for="legal_first_name" className="required">Legal First Name</label>
                            <input name="legal_first_name" type="text" />
                        </div>
                        
                        <div className="name">
                            <label for="legal_last_name" className="required">Legal Last Name</label>
                            <input name="legal_last_name" type="text" />
                        </div>

                        <div className="name">
                            <label for="nickname">Nickname</label>
                            <input name="nickname" type="text" />
                        </div>

                        <div className="role">
                            <label for="position" className="required">Position</label>
                            <input name="position" type="text" />
                        </div>

                        <div className="role">
                            <label for="department" className="required">Department</label>
                            <input name="department" type="text" />
                        </div>

                        <div className="contact">
                            <label for="cell" className="required">Cell</label>
                            <input name="cell" type="text" />
                        </div>

                        <div className="contact">
                            <label for="email" className="required">Email</label>
                            <input name="email" type="text" />
                        </div>

                        <div className="details">
                            <label for="dob" className="required">Date of Birth</label>
                            <input name="dob" type="text" />
                        </div>

                        <div className="details">
                            <label for="state_of_residence">State of Residence</label>
                            <select name="state_of_residence">
                                <option selected value></option>
                                {options}
                            </select>
                        </div>

                        <div className="numbers">
                            <label for="passport">Passport</label>
                            <input name="passport" type="text" />
                        </div>

                        <div className="numbers">
                            <label for="license">License</label>
                            <input name="license" type="text" />
                        </div>

                        <div className="numbers">
                            <label for="tsa_precheck">TSA Precheck</label>
                            <input name="tsa_precheck" type="text" />
                        </div>

                        <div className="numbers">
                            <label for="global_entry">Global Entry</label>
                            <input name="global_entry" type="text" />
                        </div>

                        <div className="seats">
                            <label for="seat_pref" className="required">Seat Preference</label>
                            <div className="seat-options">
                                <div className="seat-wrapper">
                                    <label className="seat-option" for="window">Window</label>
                                    <input name="window" type="checkbox" />
                                </div>

                                <div className="seat-wrapper">
                                    <label className="seat-option" for="middle">Middle</label>
                                    <input name="middle" type="checkbox" />
                                </div>
                                
                                <div className="seat-wrapper">
                                    <label className="seat-option" for="aisle">Aisle</label>
                                    <input name="aisle" type="checkbox" />
                                </div>
                            </div>
                        </div>

                        <div className="notes">
                            <label for="notes">Notes</label>
                            <textarea name="notes"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="modal-button" onClick={onClose}>Discard</button>
                    <button className="modal-button modal-save" onClick={onClose}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddPassenger;