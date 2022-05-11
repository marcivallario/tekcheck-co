import ReactLoading from 'react-loading';

function PageLoading({ height, width}) {
    return (
        <div className="loading-spinner">
            <ReactLoading type="spin" color="#72DCE8" height={height} width={width}/>
        </div>
    )
}

export default PageLoading;