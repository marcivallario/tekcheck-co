import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';

import { useSelector, useDispatch } from 'react-redux';
import './activeprojects.css';

function ActiveProjects() {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects)
    const activeProjects = projects.projectsList.filter(project => project.active === true)

    console.log(activeProjects)

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
                    {activeProjects.map(project => {
                        return (
                            <TableRow key={project.id} sx={{
                                backgroundColor: "#f9f9f9",
                                margin: "5px",
                            }}>
                                <TableCell scope="row" align="center" sx={{border: "none"}}>
                                    <CheckBoxRoundedIcon sx={{ color: "#72DCE8"}}/>
                                </TableCell>
                                <TableCell sx={{border: "none", fontWeight: "500"}}>#{project.job_no}</TableCell>
                                <TableCell sx={{border: "none", fontWeight: "500"}}>{project.prod_co}</TableCell>
                                <TableCell sx={{border: "none", fontWeight: "500"}}>{project.job_name}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ActiveProjects