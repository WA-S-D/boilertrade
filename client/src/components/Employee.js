import React from 'react';
import { makeStyles, CssBaseline, createTheme, ThemeProvider, Paper } from '@material-ui/core';
import EmployeeForm from "./EmployeeForm";




const theme = createTheme({
    palette: {
        primary: {
            main: "#333996",
            light: '#3c44b126'
        },
        secondary: {
            main: "#f83245",
            light: '#f8324526'
        },
        background: {
            default: "#f4f5fd"
        },
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform: 'translateZ(0)'
            }
        }
    },
    props: {
        MuiIconButton: {
            disableRipple: true
        }
    }
})


const useStyles = makeStyles({
    appMain: {
        paddingLeft: '450px',
        width: '60%'
    },
    pageContent: {
        margin: theme.spacing(6),
        padding: theme.spacing(5)
    }
})



function Employee() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.appMain}>


                <Paper className={classes.pageContent}>
                    <EmployeeForm />
                </Paper>
            </div>

        </ThemeProvider>
    );
}

export default Employee;