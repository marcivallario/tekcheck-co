import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import './viewproject.css';

function ViewProject({ project, onClose, setToggleEdit }) {
    console.log('VIEW: ', project)
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header view-edit-project">
                    <h3 className="modal-title">#{project.job_no} "{project.job_name}"</h3>
                    <h6>{project.prod_co}</h6>
                </div>
                <div className="modal-body view-project">
                    <div id="project-details">
                        <p className="detail-label">Job #: </p>
                        <p className="detail-value">{project.job_no}</p>

                        <p className="detail-label">Job Name: </p>
                        <p className="detail-value">{project.job_name}</p>

                        <p className="detail-label">Production Company: </p>
                        <p className="detail-value">{project.prod_co}</p>

                        <p className="detail-label">Active: </p>
                        <p className="detail-value">{project.active ? <CheckBoxRoundedIcon sx={{ color: "#72DCE8"}}/> : <CheckBoxOutlineBlankRoundedIcon sx={{ color: "#72DCE8"}}/>}</p>
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

export default ViewProject;