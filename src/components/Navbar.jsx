import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { NavLink } from 'react-router-dom';
import headerBackground from "../images/headerImg.jpg";

const useStyles = makeStyles()(() => ({
    root: { 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: `url(${headerBackground})`,
        backgroundSize: 'cover',
        height: '12vh',
        padding: '0 3vw 0 3vw',
        zIndex: 5,
    },
    logo: {
        height: '8vh',
        width: '10vw',
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
    }
}));

const pages = ['Home', 'Filter', 'About Us'];
const routes = ['/', '/filter', '/about'];

const Navbar = () => {
    const { classes } = useStyles();

  return (
    <header>
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
    </header>
  )
};

export default Navbar;