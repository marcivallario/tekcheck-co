import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import './passengers.css'

function Passengers() {
    return (
        <div id="passengers">
            <div className="table-header">
                 <h1>Passengers</h1>
                <input></input>
            </div>
            <TableContainer 
            component={Card}
            sx={{ 
                padding: "10px",
                overflow: "scroll",
                boxShadow: "0px 0px 25px 8px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                padding: "20px"
            }}
        >
            <Table 
                sx={{ 
                    overflow: "scroll",
                    borderSpacing: "0 5px",
                    borderCollapse: "separate"
                }} 
                size="small" 
            >
                <TableHead sx={{}}>
                    <TableRow>
                        <TableCell sx={{border: "none", fontWeight: "700"}}>Name</TableCell>
                        <TableCell sx={{
                            border: "none", 
                            fontWeight: "700",
                            display: { xs: 'none', sm: 'table-cell' }
                            }}>Position</TableCell>
                        <TableCell sx={{
                            border: "none", 
                            fontWeight: "700",
                            display: { xs: 'none', sm: 'table-cell' }
                            }}>Department</TableCell>
                        <TableCell sx={{
                            border: "none", 
                            fontWeight: "700",
                            display: { xs: 'none', sm: 'table-cell' }
                            }}>Cell</TableCell>
                        <TableCell sx={{
                            border: "none", 
                            fontWeight: "700", 
                            display: { xs: 'none', sm: 'table-cell' }
                            }}>Email</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "700"}}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{
                        backgroundColor: "#f9f9f9",
                        margin: "5px",
                    }}>
                        <TableCell component="th" sx={{border: "none", fontWeight: "500"}}>John Doe</TableCell>
                        <TableCell sx={{
                            border: "none", 
                            fontWeight: "500",
                            display: { xs: 'none', sm: 'table-cell' }
                            }}>BB Electric</TableCell>
                        <TableCell sx={
                            {border: "none", 
                            fontWeight: "500",
                            display: { xs: 'none', sm: 'table-cell' }
                            }}>G&#38;E</TableCell>
                        <TableCell sx={{
                            border: "none", 
                            fontWeight: "500",
                            display: { xs: 'none', sm: 'table-cell' }
                            }}>407-404-2878</TableCell>
                        <TableCell sx={{
                            border: "none", 
                            fontWeight: "500",
                            display: { xs: 'none', sm: 'table-cell' }
                            }}>john.doe@gmail.com</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "500"}}>View</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
            
        </div>
    )
}

export default Passengers;