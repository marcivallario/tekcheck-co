import { useHistory } from "react-router-dom";
import { useState } from 'react';

function Signup({ setUser }) {
    let history = useHistory();
    const [ formData, setFormData ] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })
    const [ errors, setErrors ] = useState([])

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]: value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(setUser)
                history.push("/dashboard")
                setFormData({
                    email: '',
                    password: ''
                })
            } else {
                res.json().then(errorResponse => setErrors(errorResponse.errors))
            }
        })
    }

    return(
        <div id="signup">
            <div id="signup-container">
                <form id="signup-form" className="auth-form" onSubmit={handleSubmit}>
                    <input onChange={handleChange}type="text"name="first_name" placeholder="First Name" className="user-input" ></input>
                    <input onChange={handleChange}type="text"name="last_name" placeholder="Last Name" className="user-input" ></input>
                    <input onChange={handleChange}type="text"name="email" placeholder="Email" className="user-input" ></input>
                    <input onChange={handleChange}name="password" type="password" placeholder="Password" className="user-input" ></input>
                    {errors.length > 0 ? <div className="error-container">{errors.map(error => <p className="error" key={error}>{error}</p>)}</div> : <div></div>}
                    <input onChange={handleChange}type="submit" value="Sign Up" className="form-button"></input>
                </form>
            </div>
        </div>
    )
}

export default Signup;