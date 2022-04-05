import { NavLink } from "react-router-dom";
import '../styles/banner.css';

function Banner() {
    return (
            <div className="col-12 col-lg-8" id="landing-content">
                <header>
                    <div id="logo-container" className="img-container">
                        <NavLink to="/" exact><img src={require('../assets/images/logo.png')} alt="logo" title="TrekCheck" /></NavLink>
                    </div>
                </header>
                    <div id="banner-content">
                        <h1>All your trips, <br/> at your fingertips.</h1>
                        <p>Their journies begin and end with you, so your peace of mind is our business. No more messy spreadsheets or tedious data plugging — just project-driven travel done right.</p>
                        <button className="auth" id="get-started"><a href="#login">Get Started</a></button>
                    </div>
            </div>
    )
}

export default Banner;