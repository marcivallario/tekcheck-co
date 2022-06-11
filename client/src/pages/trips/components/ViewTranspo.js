import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LocalTaxiRoundedIcon from '@mui/icons-material/LocalTaxiRounded';

function ViewTranspo({ transpos, toDate }) {
    console.log(transpos)

    return (
        <div className="view-transpos">
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
                            <LocalTaxiRoundedIcon sx={{ 
                                color: "white", 
                                marginRight: "1em"
                            }}/>
                            Transpos
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc",
                            }}>Direction</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Date</TableCell>
                        <TableCell sx={{
                            border: "0", 
                            fontWeight: "700",
                            backgroundColor: "#e1f9fc"
                            }}>Mode</TableCell>
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
                    {transpos.map(transpo => {
                        return (
                            <TableRow key={transpo.id}>
                                <TableCell sx={{fontSize: "0.75em"}}>{transpo.direction}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{toDate(transpo.date.slice(0,10))}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{transpo.trans_mode}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{transpo.confirmation}</TableCell>
                                <TableCell sx={{fontSize: "0.75em"}}>{transpo.notes}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default ViewTranspo;