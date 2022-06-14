import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';

function ViewAcc({ accs, toDate }) {
    accs = [...accs].sort((a,b) => (new Date(a.checkin) > new Date(b.checkin)) ? 1 : -1)

    function tConvert(time) {
        time = time.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { 
            time = time.slice(1); 
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; 
            time[0] = +time[0] % 12 || 12; 
        }
        return time.join(''); 
    }

    function formatDateTime(str) {
        let time = tConvert(str.slice(11,16))
        let date = toDate(str.slice(0,10))
        return `${date} ${time}`
    }

    return (
        <div className="view-accs">
            <Table 
                sx={{ 
                    overflow: "scroll",
                    borderSpacing: "0 0px",
                    borderCollapse: "separate",
                    width: "100%"
                }} 
                size="small" 
            >
                <TableHead>
                    <TableRow sx={{backgroundColor: "#72DCE8"}}>
                        <TableCell 
                        colSpan={8}
                        sx={{
                            borderBottom: "none", 
                            fontWeight: "700",
                            color: "white",
                            fontSize: "1.25em"
                        }}>
                            <HotelRoundedIcon sx={{ 
                                color: "white", 
                                marginRight: "1em"
                            }}/>
                            Accommodations
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc",
                            }}>Name</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Checkin</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Checkout</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Address</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Phone</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Confirmation</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Notes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accs.map(acc => {
                        return (
                            <TableRow key={acc.id}>
                                <TableCell sx={{fontSize: "0.75em"}}>{acc.name} ({acc.acc_type})</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{formatDateTime(acc.checkin)}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{formatDateTime(acc.checkout)}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{acc.address_1}, {acc.address_2? acc.address_2 + ",": null} {acc.city}, {acc.state} {acc.zip}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{acc.phone}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{acc.confirmation}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{acc.notes}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default ViewAcc;