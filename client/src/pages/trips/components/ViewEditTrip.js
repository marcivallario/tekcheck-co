import { useState } from 'react';
import ViewTrip from './ViewTrip';
import EditTrip from './EditTrip';

function ViewEditTrip({ onClose, show, trip }) {
    const [toggleEdit, setToggleEdit] = useState(false);
    if (!show) {
        return null
    }

    if (toggleEdit) {
        return <EditTrip onClose={onClose} trip={trip} setToggleEdit={setToggleEdit}/>
    } else {
        return <ViewTrip onClose={onClose} trip={trip} setToggleEdit={setToggleEdit} />
    }
}

export default ViewEditTrip;