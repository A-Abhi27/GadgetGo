import React from 'react';
import { makeStyles } from 'tss-react/mui';

const year = new Date().getFullYear();

const useStyles = makeStyles()(() => ({
    root: {
        position: "relative",
        marginTop: "25px",
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#2A2E30",
        width: "100%",
        height: "8vh",
    },
}));

const Footer = () => {
    const { classes } = useStyles();

    return <footer className={classes.root}>
        <p style={{color:'white'}}>Copyright ©️ {year} | Gadget Go</p>
    </footer>
}
export default Footer;