import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function AddAcc({ accFormData, setAccFormData }) {

     function handleAccChange(e) {
        const updatedAcc = [...accFormData];
        updatedAcc[e.target.dataset.idx][e.target.name] = e.target.value;
        setAccFormData(updatedAcc);
    }

    function deleteAdd(idx) {
        let updatedAccList = [...accFormData]
        updatedAccList.splice(idx, 1)
        setAccFormData(updatedAccList)
    }

    return (
        accFormData.map((acc, idx) => {
            return (
                <div key={idx}>
                    <div className="add-header">
                        <h3 className="add-new">{accFormData[idx].acc_type || "New Accommodation"}</h3>
                        <CloseRoundedIcon onClick={deleteAdd}/>
                    </div>
                    <div className="acc-add">
                        <label className="edit-label" htmlFor="acc_type">Accommodation Type:</label>
                        <input data-idx={idx} value={accFormData[idx].acc_type} name="acc_type" onChange={handleAccChange}></input>

                        <label className="edit-label" htmlFor="checkin">Checkin:</label>
                        <input data-idx={idx} type="datetime-local" name="checkin" defaultValue={accFormData[idx].checkin} onChange={handleAccChange}></input>

                        <label className="edit-label" htmlFor="checkout">Checkout:</label>
                        <input data-idx={idx} type="datetime-local" name="checkout" defaultValue={accFormData[idx].checkout} onChange={handleAccChange}></input>

                        <label className="edit-label" htmlFor="name">Name:</label>
                        <input data-idx={idx} value={accFormData[idx].name} name="name" onChange={handleAccChange}></input>

                        <label className="edit-label" htmlFor="address_1">Address (line 1):</label>
                        <input data-idx={idx} value={accFormData[idx].address_1} name="address_1" onChange={handleAccChange}></input>

                        <label className="edit-label" htmlFor="address_2">Address (line 2): </label>
                        <input data-idx={idx} name="address_2" value={accFormData[idx].address_2} onChange={handleAccChange}></input>

                        <label className="edit-label" htmlFor="city">City:</label>
                        <input data-idx={idx} value={accFormData[idx].city} name="city" onChange={handleAccChange}></input>

                        <label className="edit-label" htmlFor="state">State:</label>
                        <input data-idx={idx} value={accFormData[idx].state} name="state" onChange={handleAccChange}></input>

                        <label className="edit-label" htmlFor="zip">Zip:</label>
                        <input data-idx={idx} value={accFormData[idx].zip} name="zip" onChange={handleAccChange}></input>

                        <label className="edit-label" htmlFor="confirmation">Confirmation #:</label>
                        <input data-idx={idx} value={accFormData[idx].confirmation} name="confirmation" onChange={handleAccChange}></input>

                        <label className="edit-label" htmlFor="phone">Phone:</label>
                        <input data-idx={idx} value={accFormData[idx].phone} name="phone" onChange={handleAccChange}></input>

                        <label className="edit-label" htmlFor="notes">Notes:</label>
                        <input data-idx={idx} value={accFormData[idx].notes} name="notes" onChange={handleAccChange}></input>
                    </div>
                </div>
            );      
        })
    )
}

export default AddAcc;