import { useState } from 'react';

function ViewEditTrip({ onClose, show, trip }) {
    const [toggleEdit, setToggleEdit] = useState(false);
    if (!show) {
        return null
    }

    return (
        <p>View Edit </p>
    )

    // if (toggleEdit) {
    //     return <EditProject onClose={onClose} project={project} setToggleEdit={setToggleEdit}/>
    // } else {
    //     return <ViewProject onClose={onClose} project={project} setToggleEdit={setToggleEdit}/>
    // }
}

export default ViewEditTrip;