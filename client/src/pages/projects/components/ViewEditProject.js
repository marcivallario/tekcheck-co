import { useState } from 'react';
import ViewProject from './ViewProject';
import EditProject from './EditProject';



function ViewEditProject({ onClose, show, project }) {
    const [toggleEdit, setToggleEdit] = useState(false);

    if (!show) {
        return null
    }

    if (toggleEdit) {
        return <EditProject onClose={onClose} project={project} setToggleEdit={setToggleEdit}/>
    } else {
        return <ViewProject onClose={onClose} project={project} setToggleEdit={setToggleEdit}/>
    }
}

export default ViewEditProject;