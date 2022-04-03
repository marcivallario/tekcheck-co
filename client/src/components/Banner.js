import { NavLink } from "react-router-dom";
import '../styles/banner.css';

function Banner() {
    return (
            <div className="col-md-8" id="landing-content">
                <header>
                    <div id="logo-container" className="img-container">
                        <NavLink to="/" exact><img src={require('../assets/images/logo.png')} alt="logo" title="TrekCheck" /></NavLink>
                    </div>
                </header>
                <div id="banner">
                    <div id="banner-content">
                        <h1>All your trips, <br/> at your fingertips.</h1>
                        <p>Their journies begin and end with you, so your peace of mind is our business. No more messy spreadsheets or tedious data plugging — just project-driven travel done right.</p>
                        <a href="/login"><button className="auth" id="get-started">Get Started</button></a>
                    </div>
                </div>
            </div>
    )
}

export default Banner;