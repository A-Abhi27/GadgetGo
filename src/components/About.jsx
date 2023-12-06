import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    root: {
        position: "relative",
        marginTop: "25px",
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "bisque",
        width: "100%",
        height: "8vh",
    },
}));

const About = () => {
    const classes = useStyles();

    return <div className={classes.root}>
       <h1>About Page</h1>
    </div>
}
export default About;