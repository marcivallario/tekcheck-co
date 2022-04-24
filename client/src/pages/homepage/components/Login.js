import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from '../../../state/slices/userSlice'

function Login() {
    const dispatch = useDispatch();
    let history = useHistory();
    const [ loginData, setLoginData ] = useState({
        email: '',
        password: ''
    })
    const [ errors, setErrors ] = useState(null)

    console.log('Login data: ', loginData)

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then(user => {
                    console.log('USER APPROVED: ', user)
                    dispatch(setUser(user))
                    history.push("/dashboard")
                })
             } else {
                res.json().then(errorResponse => setErrors(errorResponse))
            }
        })
    }
    
    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setLoginData({...loginData, [key]: value})
    }
    
    return (
        <div id="login">
            <div id="login-container">
                <form id="login-form" className="auth-form" onSubmit={handleSubmit}>
                    <input type="text" name="email" placeholder="Email" className="user-input" onChange={handleChange}></input>
                    <input name="password" type="password" placeholder="Password" className="user-input" onChange={handleChange}></input>
                    {errors ? <div className="error-container"><p className="error">{errors.error}</p></div> : null}
                    <input type="submit" value="Login" className="form-button"></input>
                </form>
            </div>
        </div>
    )
}

export default Login;