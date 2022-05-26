import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
// inherits style from activeprojects.css

function TripsInProgress() {
    return(
        <TableContainer 
            component={Card}
            sx={{ 
                height: "100%",
                overflow: "scroll",
                boxShadow: "0px 0px 25px 8px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                padding: "20px"
            }}
        >
            <Table 
                sx={{ 
                    width: "100%",
                    overflow: "scroll",
                    borderSpacing: "0 5px",
                    borderCollapse: "separate"
                }} 
                size="small" 
            >
                <TableHead sx={{}}>
                    <TableRow>
                        <TableCell sx={{border: "none", fontWeight: "700"}}>Name</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "700"}}>Project</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "700"}}>Dates</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "700"}}>Flight?</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{
                        backgroundColor: "#f9f9f9",
                        margin: "5px",
                    }}>
                        <TableCell sx={{border: "none", fontWeight: "500"}}>John Doe</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "500"}}>#300-53</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "500"}}>Fri, 23 Apr 2022 - Sat, 24 Apr 2022</TableCell>
                        <TableCell sx={{border: "none"}}>
                            <CheckRoundedIcon sx={{ color: "#FF7E3D"}}/>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TripsInProgress;

