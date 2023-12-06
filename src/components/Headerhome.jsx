import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { NavLink, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import headerBackground from "../images/headerImg.jpg";

const useStyles = makeStyles()(() => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: `url(${headerBackground})`,
        backgroundSize: 'cover',
        height: '20vh',
        padding: '0 3vw 0 3vw',
        zIndex: 5,
    },
    logo: {
        height: '12vh',
        width: '20vw',
    },
    activeNav: {
        color: "black",
        textDecorationLine: 'underline',
        textDecorationThickness: '5px !important',
        textUnderlineOffset: '10px',
        padding: '5px',
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginRight: '2vw',
    },
    pendingNav: {
        color: "black",
        fontSize: '1.5rem',
        fontWeight: "bold",
        marginRight: '2vw',
        textDecorationLine: 'none'
    },
    nav: {
        color: "black",
        fontSize: '1.5rem',
        fontWeight: "bold",
        marginRight: '2vw',
        textDecorationLine: 'none'
    },
    searchbar: {
        display: 'flex',
        position: 'relative',
        bottom: '4vh',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        background: "#DCF2F9",
        width: '40vw',
        height: '7.5vh'
    },
    btn: {
        position: 'relative',
        fontSize: "1.5rem",
        backgroundColor: "#7FC7FF",
        height: '7.6vh',
        width: '5vw',
        border: '0',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: ' 5px',
        right: '40px',
        cursor: 'pointer'
    }
}));

const pages = ['Home', 'Filter', 'About Us'];
const routes = ['/', '/filter', '/about'];

const Header = () => {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const [search, setSearch] = useState(null);

    const handleClick = (event) => {
        setSearch(event.target.value)
        navigate("/filter", { state: search });
    };

    return <header>
        <div className={classes.root}>
            <img className={classes.logo} src={require('../images/logo.png')} alt='logo' />
            <div >
                {pages.map((page, index) => (
                    <NavLink
                        to={routes[index]}
                        key={page}
                        className={({ isActive, isPending }) =>
                            isActive
                                ? classes.activeNav
                                : isPending
                                    ? classes.pendingNav
                                    : classes.nav
                        }
                    >
                        {page}
                    </NavLink>
                ))}
            </div>
        </div>
        <div className={classes.searchbar}>
            <TextField InputProps={{ className: classes.input }} label="Search for a phone..." color="primary"/>
            <button className={classes.btn} onClick={handleClick}>Go</button>
        </div>
    </header>
}
export default Header;