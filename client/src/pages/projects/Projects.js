import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import IconButton from '@mui/material/IconButton';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import PageLoading from '../../common/components/PageLoading';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeProject } from '../../state/slices/projectsSlice';
import AddProject from './components/AddProject';
import ViewEditProject from './components/ViewEditProject';

function Projects() {
    const dispatch = useDispatch(); 
    const projects = useSelector(state => state.projects)
    const [ search, setSearch ] = useState('');
    const [ showAdd, setShowAdd ] = useState(false);
    const [ showViewEdit, setShowViewEdit ] = useState(false);
    const [ selectedProject, setSelectedProject ] = useState({
        user_id: '',
        job_no: '',
        job_name: '',
        prod_co: '',
        active: ''
    })

    const filteredProjects = projects.projectsList.filter(project => {
        const jobName = project.job_name.toLowerCase()
        const prodCo = project.prod_co.toLowerCase()
        const searchTerm = search.toLowerCase()
        return jobName.includes(searchTerm) || prodCo.includes(searchTerm || search === '')
    }).sort((a,b) => (a.job_no < b.job_no) ? 1 : -1)

    function updateSeach(e) {
        setSearch(e.target.value);
    }

    function handleDelete(proj) {
        fetch(`/projects/${proj.id}`, {
            method: 'DELETE'
            })
        .then(dispatch(removeProject(proj)));
    }

    if (projects.isLoading === true) {
        return (
            <div id="data-loading">
                <PageLoading height="10vh" width="10vh"/>
            </div> 
        )
    }

    return (
        <div id="projects">
            <div className="table-header">
                 <h1>Projects</h1>
                <input value={search} onChange={updateSeach} placeholder="Search..."/>
            </div>
            <TableContainer 
                component={Card}
                sx={{ 
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
                            <TableCell sx={{
                                border: "none", 
                                fontWeight: "700",
                                display: { xs: 'none', sm: 'table-cell' }
                                }}>Job #</TableCell>
                            <TableCell sx={{border: "none", fontWeight: "700"}}>Job Name</TableCell>
                            <TableCell sx={{
                                border: "none", 
                                fontWeight: "700",
                                display: { xs: 'none', sm: 'table-cell' }
                                }}>Production Company</TableCell>
                            <TableCell sx={{border: "none", fontWeight: "700"}}>Active?</TableCell>
                            <TableCell sx={{border: "none", fontWeight: "700"}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.projectsList.length === 0? <tr><td className="empty-table" colSpan="6"><p>Click the + to add a project.</p></td></tr> : filteredProjects.map(proj => {
                            return (
                                <TableRow key={proj.id} sx={{
                                    backgroundColor: "#f9f9f9",
                                    margin: "5px"
                                }}>
                                    <TableCell sx={
                                        {border: "none", 
                                        fontWeight: "500",
                                        display: { xs: 'none', sm: 'table-cell' },
                                        whiteSpace: "nowrap"
                                        }}>#{proj.job_no}</TableCell>
                                    <TableCell sx={{border: "none", fontWeight: "500", whiteSpace: "nowrap"}}>{proj.job_name}</TableCell>
                                    <TableCell sx={
                                        {border: "none", 
                                        fontWeight: "500",
                                        display: { xs: 'none', sm: 'table-cell' },
                                        whiteSpace: "nowrap"
                                        }}>{proj.prod_co}</TableCell>
                                    <TableCell sx={{border: "none", fontWeight: "500", whiteSpace: "nowrap"}}>
                                            {proj.active ? <CheckBoxRoundedIcon sx={{ color: "#72DCE8"}}/> : <CheckBoxOutlineBlankRoundedIcon sx={{ color: "#72DCE8"}}/>}
                                    </TableCell>
                                    <TableCell sx={{border: "none", fontWeight: "500"}}>
                                        <div className="actions">
                                            <IconButton onClick={() => {
                                            setShowViewEdit(true)
                                            setSelectedProject(proj)}}><VisibilityRoundedIcon sx={{ color: "#FF7E3D", cursor: "pointer"}} /></IconButton>

                                            <IconButton onClick={() => handleDelete(proj)}><DeleteRoundedIcon sx={{ color: "#FF7E3D", cursor: "pointer"}}/></IconButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <button className="add-record" onClick={() => setShowAdd(true)}>+</button>
            <AddProject onClose={() => setShowAdd(false)} show={showAdd} />
            <ViewEditProject onClose={() => setShowViewEdit(false)} show={showViewEdit} project={selectedProject}/>
        </div>
    )
}

export default Projects;