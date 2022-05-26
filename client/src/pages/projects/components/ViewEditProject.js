import { useState } from 'react';
import ViewProject from './ViewProject';



function ViewEditProject({ onClose, show, project }) {
    const [toggleEdit, setToggleEdit] = useState(false);

    if (!show) {
        return null
    }

    if (toggleEdit) {
        return <p>Edit</p>
    } else {
        return <ViewProject onClose={onClose} project={project} setToggleEdit={setToggleEdit}/>
    }
}

export default ViewEditProject;