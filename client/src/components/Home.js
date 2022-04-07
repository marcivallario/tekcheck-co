import Banner from "./Banner";
import LoginSignup from "./LoginSignup";
import '../styles/home.css'

function Home({ setUser }) {
    return (
        <section id="home" className="container-fluid">
            <div className="row">
                <Banner />
                <LoginSignup setUser={setUser}/>
            </div>
        </section>
    )
}

export default Home;