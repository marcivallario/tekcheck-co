import Login from './Login';
import Signup from './Signup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import '../styles/loginsignup.css'

function TabPanel(props) {
    const { children, value, index } = props;

    return (<div className="tab-panel">
            {value === index && (<div className="tab-content">{children}</div>)}
        </div>
    )
}

export default function LoginSignup() {
    const [ value, setValue ] = useState(0);
    function handleChange(e, val) {
        setValue(val);
    }

    return (
        <div className="col-12 col-lg-4" id="login-signup">
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Login" />
                <Tab label="Signup" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Login />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Signup />
            </TabPanel>
        </div>
    ) 
};

