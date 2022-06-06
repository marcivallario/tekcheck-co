import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function AddFlight({ flightFormData, setFlightFormData }) {

    function handleFlightChange(e) {
        const updatedFlights = [...flightFormData];
        updatedFlights[e.target.dataset.idx][e.target.name] = e.target.value;
        setFlightFormData(updatedFlights);
    }

    function deleteAdd(idx) {
        let updatedFlightList = [...flightFormData]
        updatedFlightList.splice(idx, 1)
        setFlightFormData(updatedFlightList)
    }

    return (
        flightFormData.map((flight, idx) => {
            return (
                <div className="flights" key={idx}>
                    <div className="add-header">
                        <h3 className="add-new">{flightFormData[idx].leg || "New Flight"}</h3>
                        <CloseRoundedIcon sx={{cursor: "pointer"}} onClick={deleteAdd}/>
                    </div>
                    
                    <div className="flight-add">
                        <div className="flight-details">
                            <label className="edit-label" htmlFor="leg">Leg:</label>
                            <input data-idx={idx} value={flightFormData[idx].leg} name="leg" onChange={handleFlightChange}></input>
                        </div>
                        
                        <div className="flight-details">
                            <label className="edit-label" htmlFor="airline">Airline:</label>
                            <input data-idx={idx} value={flightFormData[idx].airline} name="airline" onChange={handleFlightChange}></input>
                        </div>
                        

                        <div className="flight-details">
                            <label className="edit-label" htmlFor="flight_no">Flight #:</label>
                            <input data-idx={idx} value={flightFormData[idx].flight_no} name="flight_no" onChange={handleFlightChange}></input>
                        </div>

                        <div className="departure-details">
                            <label className="edit-label" htmlFor="dep_airport">Departure Airport:</label>
                            <input data-idx={idx} value={flightFormData[idx].dep_airport} name="dep_airport" onChange={handleFlightChange}></input>
                        </div>
                        

                        <div className="departure-details">
                            <label className="edit-label" htmlFor="dep_time">Departure Date/Time:</label>
                            <input data-idx={idx} type="datetime-local" name="dep_time" defaultValue={flightFormData[idx].dep_time} onChange={handleFlightChange}></input>
                        </div>

                        <div className="other-flight-details">
                            <label className="edit-label" htmlFor="seat">Seat Assignment: </label>
                            <input data-idx={idx} value={flightFormData[idx].seat} name="seat" onChange={handleFlightChange}></input>
                        </div>

                        <div className="arrival-details">
                            <label className="edit-label" htmlFor="arr_airport">Arrival Airport:</label>
                            <input data-idx={idx} value={flightFormData[idx].arr_airport} name="arr_airport" onChange={handleFlightChange}></input>
                        </div>
                        
                        <div className="arrival-details">
                            <label className="edit-label" htmlFor="arr_time">Arrival Date/Time:</label>
                            <input data-idx={idx} type="datetime-local" name="arr_time" defaultValue={flightFormData[idx].arr_time} onChange={handleFlightChange}></input>
                        </div>

                        <div className="other-flight-details">
                            <label className="edit-label" htmlFor="confirmation">Confirmation #:</label>
                            <input data-idx={idx} value={flightFormData[idx].confirmation} name="confirmation" onChange={handleFlightChange}></input>
                        </div>

                        <div className="flight-notes">
                            <label className="edit-label" htmlFor="notes">Notes:</label>
                            <textarea data-idx={idx} value={flightFormData[idx].notes} name="notes" onChange={handleFlightChange}></textarea>
                        </div>
                    </div>
                </div>
            );      
        })
    )
}

export default AddFlight;