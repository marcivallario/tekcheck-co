import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import Divider from '@mui/material/Divider';
import './viewtrip.css'
import ViewFlight from './ViewFlight';
import ViewTranspo from './ViewTranspo';

function ViewTrip({ onClose, trip, setToggleEdit}) {
    console.log(trip.flights)

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
       const date = d.getDate() + 1
       const month = months[d.getMonth()]
       return `${month} ${date}, ${year}`
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header view-edit-trip">
                    <h4 className="modal-title">#{trip.project.job_no} "{trip.project.job_name}"</h4>
                    <h4>{trip.passenger.legal_first_name} {trip.passenger.legal_last_name}</h4>
                </div>
                <div className="modal-body view-trip">
                    <div id="trip-details">
                        <div className="trip-main">
                            <div className="trip-overview">
                                <p className="detail-label">Depart: </p>
                                <p className="detail-value">{trip.depart}</p>

                                <p className="detail-label">Return:  </p>
                                <p className="detail-value">{trip.return}</p>

                                <p className="detail-label">Itinerary Sent: </p>
                                <p className="detail-value">{trip.itinerary_sent ? <CheckBoxRoundedIcon sx={{ color: "#72DCE8"}}/> : <CheckBoxOutlineBlankRoundedIcon sx={{ color: "#72DCE8"}}/>}</p>
                            </div>
                            <div className="passenger-contact">
                                <p className="detail-label">Position: </p>
                                <p className="detail-value">{trip.passenger.position}</p>
                                <p className="detail-label">Cell: </p>
                                <p className="detail-value">{trip.passenger.cell}</p>

                                <p className="detail-label">Email: </p>
                                <p className="detail-value">{trip.passenger.email}</p>
                            </div>
                        </div>
                    </div>
                    <Divider variant="fullWidth" sx={{ margin: "2em 0"}}/>
                    <div className="trip-addons">
                        {trip.flights.length > 0? <ViewFlight flights={trip.flights} toDate={formatDate}/> : null }
                        {trip.transportations.length > 0? <ViewTranspo transpos={trip.transportations} toDate={formatDate} /> : null}
                        {/* <div className="view-transpos">
                            <LocalTaxiRoundedIcon />
                        </div>
                        <div className="view-accommodations">
                            <HotelRoundedIcon />
                        </div> */}
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

export default ViewTrip;