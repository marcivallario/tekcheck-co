import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../../state/slices/userSlice'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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

import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./navigation.css";

const drawerWidth = 240;

function Navigation({ window, component: Component }) {
  const dispatch = useDispatch();
  let history = useHistory();
  const user = useSelector(state => state.user.currentUser)
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ time, setTime ] = useState(new Date().toLocaleTimeString(undefined, { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" }))

  useEffect(() => {
    const refreshTime = setInterval(() => {
      setTime(new Date().toLocaleTimeString(undefined, { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" }))
    }, 1000)

    return refreshTime;
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    fetch('/logout', {
        method: 'DELETE'
    })
    .then(data => {
      dispatch(removeUser())
      history.push('/')
    })
  }

  const theme = createTheme({
    typography: {
      fontFamily: 'Manrope, sans-serif'
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "0px 10px 15px -8px rgba(0,0,0,0.1);",
          }
        }
      },
      
      MuiToolbar: {
        styleOverrides: {
          root: {
            justifyContent: 'space-between',
            alignItems: 'center'
          }
        }
      }
    }
  })

  const menuTheme = createTheme({
    typography: {
      fontFamily: 'Manrope, sans-serif'
    },
    components: {
       MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "#FF7E3D"
          }
        }
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            transition: "0.5s",
            '&:hover': {
              backgroundColor: "#ff9b6a",
              transition: "0.5s"
            }
          }
        }
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: '#fff'
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontWeight: "800",
            color: "#fff",
          }
        }
      },
    }
  })

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem button key='Dashboard'>
          <a className="menu-route" href="/dashboard">
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
           </a>
        </ListItem>
        <ListItem button key='Passengers'>
          <a className="menu-route" href="/passengers">
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary='Passengers' />
          </a>
        </ListItem>
        <ListItem button key='Projects'>
          <a className="menu-route" href="/projects">
            <ListItemIcon>
                <FolderIcon />
            </ListItemIcon>
            <ListItemText primary='Projects' />
          </a>
        </ListItem>
        <ListItem button key='Trips'>
          <a className="menu-route" href="/trips">
            <ListItemIcon>
                <AirplaneTicketIcon />
            </ListItemIcon>
            <ListItemText primary='Trips' />
          </a>
        </ListItem>
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

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{ 
              zIndex: (theme) => theme.zIndex.drawer + 1,
              backgroundColor: "white",
            }}
          >
            <Toolbar>
              <div className="img-container" id="nav-logo">
                <img src={require('../../assets/images/logo_orange.png')} title="TrekCheck" alt="TrekCheck" />
              </div>
              <div className="welcome">
                <h6>Welcome, {user.first_name} {user.last_name}!</h6>
                <p>{time}</p>
              </div>
              
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon sx={{color: "#FF7E3D"}}/>
              </IconButton>
              
            </Toolbar>
          </AppBar>
          <ThemeProvider theme={menuTheme}>
            <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="navigation"
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
          </ThemeProvider>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
            <Component />
            <footer><p>TrekCheck © 2022. All Rights Reserved.</p></footer>
          </Box>
        </Box>
    </ThemeProvider>
  );
}

export default Navigation;