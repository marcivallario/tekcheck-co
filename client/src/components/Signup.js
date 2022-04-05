function Signup() {
    return(
        <div id="signup">
            <div id="signup-container">
                <form id="signup-form" className="auth-form">
                    <input type="text"name="first_name" placeholder="First Name" className="user-input" ></input>
                    <input type="text"name="last_name" placeholder="Last Name" className="user-input" ></input>
                    <input type="text"name="email" placeholder="Email" className="user-input" ></input>
                    <input name="password" type="password" placeholder="Password" className="user-input" ></input>
                    {/* {errors.length > 0 ? <div className="error-container">{errors.map(error => <p className="error" key={error}>{error}</p>)}</div> : <div></div>} */}
                    <input type="submit" value="Sign Up" className="form-button"></input>
                </form>
            </div>
        </div>
    )
}

export default Signup;