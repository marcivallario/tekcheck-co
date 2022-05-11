import ReactLoading from 'react-loading';

function PageLoading() {
    return (
        <div className="page-loading">
            <ReactLoading type="spin" color="#72DCE8" height="30vh" width="30vw"/>
        </div>
    )
}

export default PageLoading;