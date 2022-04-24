import Banner from "./components/Banner";
import LoginSignup from "./LoginSignup";
import './home.css'

function Home() {
    return (
        <section id="home" className="container-fluid">
            <div className="row">
                <Banner />
                <LoginSignup />
            </div>
        </section>
    )
}

export default Home;