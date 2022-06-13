import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function AddTranspo({ transpoFormData, setTranspoFormData }) {

    function handleTranspoChange(e) {
        const updatedTranspo = [...transpoFormData];
        updatedTranspo[e.target.dataset.idx][e.target.name] = e.target.value;
        setTranspoFormData(updatedTranspo);
    }

    function deleteAdd(idx) {
        let updatedTranspoList = [...transpoFormData]
        updatedTranspoList.splice(idx, 1)
        setTranspoFormData(updatedTranspoList)
    }

    return(
        transpoFormData.map((transpo, idx) => {
            return (
                <div className="transpos" key={idx}>
                    <div className="add-header">
                        <h3 className="add-new">{transpoFormData[idx].direction || "New Transportation"}</h3>
                        <CloseRoundedIcon sx={{cursor: "pointer"}} onClick={() => deleteAdd(idx)}/>
                    </div>
                    <div className="transpo-add">
                        <div className="transpo-detail">
                            <label className="edit-label" htmlFor="direction">Direction:</label>
                            <input data-idx={idx} value={transpoFormData[idx].direction} name="direction" onChange={handleTranspoChange}></input>
                        </div>
                        
                        <div className="transpo-detail">
                            <label className="edit-label" htmlFor="date">Date: </label>
                            <input data-idx={idx} type="date" value={transpoFormData[idx].date} name="date" min="1900-01-01" onChange={handleTranspoChange}/>
                        </div>
                        

                        <div className="transpo-detail">
                            <label className="edit-label" htmlFor="trans_mode">Mode:</label>
                            <input data-idx={idx} value={transpoFormData[idx].trans_mode} name="trans_mode" onChange={handleTranspoChange}></input>
                        </div>
                        

                        <div className="transpo-detail">
                            <label className="edit-label" htmlFor="confirmation">Confirmation:</label>
                            <input data-idx={idx} value={transpoFormData[idx].confirmation} name="confirmation" onChange={handleTranspoChange}></input>
                        </div>
                        

                        <div className="transpo-notes">
                            <label className="edit-label" htmlFor="notes">Notes:</label>
                            <textarea  data-idx={idx} value={transpoFormData[idx].notes} name="notes" onChange={handleTranspoChange}></textarea>
                        </div>
                    </div>
                </div>
            );      
        })
    )
}

export default AddTranspo;