import { Paper } from '@mui/material'
import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SIGN_UP } from "./SIGN_UP"
import Login from "./Login"
export default function SIGN_IN() {
    const paperstyle={
        margin : "5rem auto",
        width : 500
    }
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box >
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    return (
        <Paper elevation={20} style={paperstyle}>


            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="primary tabs example"

            >
                <Tab label="Sign In" />
                <Tab label="Sign Up" />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <Login />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <SIGN_UP />
            </CustomTabPanel>



        </Paper>

    )
}
