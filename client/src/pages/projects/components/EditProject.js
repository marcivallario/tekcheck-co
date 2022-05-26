import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProject } from '../../../state/slices/projectsSlice'

function EditProject({ project, onClose, setToggleEdit}) {
    const dispatch = useDispatch({ project });
    const userId = useSelector(state => state.user.currentUser.id)
    const [ formData, setFormData ] = useState({
        user_id: userId,
        job_no: '',
        job_name: '',
        prod_co: '',
        active: ''
    })
    const [ errors, setErrors ] = useState(null)

    useEffect(() => {
        setFormData({
            id: project.id,
            user_id: userId,
            job_no: project.job_no,
            job_name: project.job_name,
            prod_co: project.prod_co,
            active: project.active
        })
    }, [project])

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]: value})
    }

    function handleCheckboxChange(e) {
        setFormData({...formData, active: !formData.active})
    }

    function handleUpdate() {
        fetch(`/projects/${formData.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => {
            if (!resp.ok) {
                resp.json().then(resp => setErrors(resp.errors))
            } else {
                resp.json().then(updatedProject => {
                    dispatch(updateProject(updatedProject))
                    onClose()
                    setToggleEdit(false)
                })
            }
        })
    }

    function displayErrors() {
        if (errors) {
            return (
                <div id="passenger-edit-error" className="error-container">
                    {errors.map((err, index) => {
                        return <p key={index} className="error">{err}</p>
                    })}
                </div>
            )
        } else {
            return null
        }
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

                            <label htmlFor="active" className="required">Active</label>
                            <input name="active" type="checkbox" checked={formData.active} onChange={handleCheckboxChange}/>
                        {displayErrors()}
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="modal-button" onClick={() => setToggleEdit(false)}>Discard</button>
                    <button className="modal-button modal-save" onClick={handleUpdate}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default EditProject;