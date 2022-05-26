import { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { addProject } from '../../../state/slices/projectsSlice';
import "./addproject.css"

function AddProject({ show, onClose }) {
    const dispatch = useDispatch(); 
    const userId = useSelector(state => state.user.currentUser.id)
    const [ formData, setFormData ] = useState({
        user_id: userId,
        job_no: '',
        job_name: '',
        prod_co: '',
        active: ''
    })
    const [ errors, setErrors ] = useState(null)

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]: value})
    }

    function handleCheckboxChange(e) {
        setFormData({...formData, active: !formData.active})
    }

    function saveProject() {
        fetch('/projects', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
            })
        .then(resp => {
            if (!resp.ok) {
                resp.json().then(resp => setErrors(resp.errors))
            } else {
                resp.json().then(newProject => {
                    dispatch(addProject(newProject))
                    discardModal()
                })
            }
        })
    }

    function displayErrors() {
        if (errors) {
            return (
                <div id="project-add-error" className="error-container">
                    {errors.map((err, index) => {
                        return <p key={index} className="error">{err}</p>
                    })}
                </div>
            )
        } else {
            return null
        }
    }

    function discardModal() {
        setFormData({
            uuser_id: userId,
            job_no: '',
            job_name: '',
            prod_co: '',
            active: ''
        })
        onClose()
    }

    if (!show) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Add Project</h3>
                </div>
                <div className="modal-body">
                    <form id="add-project">

                            <label htmlFor="job_no" className="required">Job #</label>
                            <input name="job_no" type="text" value={formData.job_no} onChange={handleChange}/>

                            <label htmlFor="job_name" className="required">Job Name</label>
                            <input name="job_name" type="text" value={formData.job_name} onChange={handleChange}/>

                            <label htmlFor="prod_co" className="required">Production Company</label>
                            <input name="prod_co" type="text" value={formData.prod_co} onChange={handleChange}/>

                            <label htmlFor="window" className="required">Active</label>
                            <input name="active" type="checkbox" value={formData.active} onChange={handleCheckboxChange}/>
                        {displayErrors()}
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="modal-button" onClick={discardModal}>Discard</button>
                    <button className="modal-button modal-save" onClick={saveProject}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddProject