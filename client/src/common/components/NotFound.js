import "./notfound.css";

function NotFound() {
    return (
        <div class="container-fluid" id="not-found">
            <div id="not-found-content">
                <h1>Uh Oh!</h1>
                <p>The page you're looking for doesn't exist. Please check your URL for spellings or capitalizations. If you're having trouble locating your destination, let's start back at the <a href="/">Home Page</a>.</p>
                <p className="error-code">Error code: 404 Not Found</p>
            </div>
        </div>
    )
}

export default NotFound;