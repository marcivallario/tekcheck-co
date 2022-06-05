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
                <div key={idx}>
                    <div className="add-header">
                        <h3 className="add-new">{transpoFormData[idx].direction || "New Transportation"}</h3>
                        <CloseRoundedIcon onClick={deleteAdd}/>
                    </div>
                    <div className="transpo-add">
                        <label className="edit-label" htmlFor="direction">Direction:</label>
                        <input data-idx={idx} value={transpoFormData.direction} name="direction" onChange={handleTranspoChange}></input>

                        <label className="edit-label" htmlFor="date">Date: </label>
                        <input data-idx={idx} type="date" value={transpoFormData.date} name="date" min="1900-01-01" onChange={handleTranspoChange}/>

                        <label className="edit-label" htmlFor="trans_mode">Mode:</label>
                        <input data-idx={idx} value={transpoFormData.trans_mode} name="trans_mode" onChange={handleTranspoChange}></input>

                        <label className="edit-label" htmlFor="confirmation">Confirmation:</label>
                        <input data-idx={idx} value={transpoFormData.confirmation} name="confirmation" onChange={handleTranspoChange}></input>

                        <label className="edit-label" htmlFor="notes">Notes:</label>
                        <textarea  data-idx={idx} value={transpoFormData.notes} name="notes" onChange={handleTranspoChange}></textarea>
                    </div>
                </div>
            );      
        })
    )
}

export default AddTranspo;