import { useState } from 'react';
import { Route, Redirect, Link, BrowserRouter } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import FlightIcon from '@mui/icons-material/Flight';
import LanguageIcon from '@mui/icons-material/Language';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import Dashboard from '../../pages/dashboard/Dashboard';
import Passengers from '../../pages/passengers/Passengers';
import Projects from '../../pages/projects/Projects';
import Trips from '../../pages/trips/Trips';
const drawerWidth = 240;

function Navigation({ window, user }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    console.log('logout');
  }

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem button key='Dashboard' to="/dashboard" component={Link}>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
        </ListItem>
        <ListItem button key='Passengers' to="/passengers" component={Link}>
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary='Passengers' />
        </ListItem>
        <ListItem button key='Projects' to="/projects" component={Link}>
            <ListItemIcon>
                <FolderIcon />
            </ListItemIcon>
            <ListItemText primary='Projects' />
        </ListItem>
        <ListItem button key='Trips' to="/trips" component={Link}>
            <ListItemIcon>
                <AirplaneTicketIcon />
            </ListItemIcon>
            <ListItemText primary='Trips' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key='Flight Aware' component="a" href="https://flightaware.com/" target='_blank'>
            <ListItemIcon>
                <FlightIcon />
            </ListItemIcon>
            <ListItemText primary='Flight Aware' />
        </ListItem>
        <ListItem button key='U.S. Travel Alerts' component="a" href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/" target='_blank'>
            <ListItemIcon>
                <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary='U.S. Travel Alerts' />
        </ListItem>
        <ListItem button key='Logout' onClick={handleLogout}>
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    // if (!user) {
    //     return (
    //         <Redirect to="/" /> 
    //     )
    // }

  return (
      <BrowserRouter>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <img src={require('../../assets/images/logo.png')} title="TrekCheck" alt="TrekCheck" /> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
            <Route
                path='/passengers'
                component={Passengers}
              />
            <Route
                path='/projects'
                component={Projects}
              />
            <Route
                path='/trips'
                component={Trips}
              />
            <Route
                exact path='/dashboard'
                component={Dashboard}
              />
       
      </Box>
    </Box>
    </BrowserRouter>
  );
}

export default Navigation;