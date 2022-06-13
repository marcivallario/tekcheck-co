import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function AddAcc({ accFormData, setAccFormData }) {

    function formatPhoneNumber(value) {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }

        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
            3,
            6
        )}-${phoneNumber.slice(6, 10)}`;

    }

     function handleAccChange(e) {
        const updatedAcc = [...accFormData];
        updatedAcc[e.target.dataset.idx][e.target.name] = e.target.value;
        setAccFormData(updatedAcc);
    }

    function handlePhoneChange(e) {
        const updatedAcc = [...accFormData];
        updatedAcc[e.target.dataset.idx][e.target.name] = formatPhoneNumber(e.target.value);
        setAccFormData(updatedAcc)
    }

    function deleteAdd(idx) {
        let updatedAccList = [...accFormData]
        updatedAccList.splice(idx, 1)
        setAccFormData(updatedAccList)
    }

    return (
        accFormData.map((acc, idx) => {
            return (
                <div className="accs" key={idx}>
                    <div className="add-header">
                        <h3 className="add-new">{accFormData[idx].name || "New Accommodation"}</h3>
                        <CloseRoundedIcon sx={{cursor: "pointer"}} onClick={() => deleteAdd(idx)}/>
                    </div>
                    <div className="acc-add">
                        <div className="acc-detail">
                            <label className="edit-label" htmlFor="name">Accommodation Name:</label>
                            <input data-idx={idx} value={accFormData[idx].name} name="name" onChange={handleAccChange}></input>
                        </div>

                        <div className="acc-detail">
                            <label className="edit-label" htmlFor="acc_type">Accommodation Type:</label>
                            <input data-idx={idx} value={accFormData[idx].acc_type} name="acc_type" onChange={handleAccChange}></input>
                        </div>

                        <div className="acc-detail">
                            <label className="edit-label" htmlFor="checkin">Checkin:</label>
                            <input data-idx={idx} type="datetime-local" name="checkin" defaultValue={accFormData[idx].checkin} onChange={handleAccChange}></input>
                        </div>

                        <div className="acc-detail">
                            <label className="edit-label" htmlFor="checkout">Checkout:</label>
                            <input data-idx={idx} type="datetime-local" name="checkout" defaultValue={accFormData[idx].checkout} onChange={handleAccChange}></input>
                        </div>
                        
                        <div className="street-address">
                            <label className="edit-label" htmlFor="address_1">Address (line 1):</label>
                            <input data-idx={idx} value={accFormData[idx].address_1} name="address_1" onChange={handleAccChange}></input>
                        </div>
                        
                        <div className="street-address">
                            <label className="edit-label" htmlFor="address_2">Address (line 2): </label>
                            <input data-idx={idx} name="address_2" value={accFormData[idx].address_2} onChange={handleAccChange}></input>
                        </div>
                        
                        <div className="address-postal">
                            <label className="edit-label" htmlFor="city">City:</label>
                            <input data-idx={idx} value={accFormData[idx].city} name="city" onChange={handleAccChange}></input>
                        </div>
                        

                        <div className="address-postal">
                            <label className="edit-label" htmlFor="state">State:</label>
                            <input data-idx={idx} value={accFormData[idx].state} name="state" onChange={handleAccChange}></input>
                        </div>
                        

                        <div className="address-postal">
                            <label className="edit-label" htmlFor="zip">Zip:</label>
                            <input data-idx={idx} value={accFormData[idx].zip} name="zip" onChange={handleAccChange}></input>
                        </div>
                        
                        <div className="res-detail">
                            <label className="edit-label" htmlFor="confirmation">Confirmation #:</label>
                            <input data-idx={idx} value={accFormData[idx].confirmation} name="confirmation" onChange={handleAccChange}></input>
                        </div>
                        

                        <div className="res-detail">
                            <label className="edit-label" htmlFor="phone">Phone:</label>
                            <input data-idx={idx} value={accFormData[idx].phone} name="phone" onChange={handlePhoneChange}></input>
                        </div>
                        

                        <div className="notes">
                            <label className="edit-label" htmlFor="notes">Notes:</label>
                            <textarea data-idx={idx} value={accFormData[idx].notes} name="notes" onChange={handleAccChange}></textarea>
                        </div>
                    </div>
                </div>
            );      
        })
    )
}

export default AddAcc;