import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import './activeprojects.css';

function ActiveProjects() {
    return(
        <TableContainer 
            component={Card}
            sx={{ 
                padding: "10px",
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
                        <TableCell align="center" sx={{border: "none", fontWeight: "700"}}>Active</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "700"}}>Job No.</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "700"}}>Client</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "700"}}>Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{
                        backgroundColor: "#f9f9f9",
                        margin: "5px",
                    }}>
                        <TableCell scope="row" align="center" sx={{border: "none"}}>
                            <CheckBoxRoundedIcon sx={{ color: "#72DCE8"}}/>
                        </TableCell>
                        <TableCell sx={{border: "none", fontWeight: "500"}}>#300-53</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "500"}}>Amazon</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "500"}}>"Tom Clancy's Jack Ryan"</TableCell>
                    </TableRow>
                    <TableRow sx={{
                        backgroundColor: "#f9f9f9"
                    }}>
                        <TableCell scope="row" align="center" sx={{border: "none"}}>
                            <CheckBoxRoundedIcon sx={{ color: "#72DCE8"}}/>
                        </TableCell>
                        <TableCell sx={{border: "none", fontWeight: "500"}}>#225-24</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "500"}}>Netflix</TableCell>
                        <TableCell sx={{border: "none", fontWeight: "500"}}>"Messiah"</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ActiveProjects