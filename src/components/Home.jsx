import { Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Link, useNavigate } from 'react-router-dom';
import Carousels from '../carousel/Carousels';
import { cheapest, toprated } from '../carousel/carouseldata';
import Header from './Headerhome';
import Footer from './Footer';
import Cards from './cards';

const useStyles = makeStyles()(() => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '10vh'
    },
    tagline: {
        height: '50vh',
        width: '40vw',
        textAlign: 'center'
    },
    heading: {
        fontSize: '4.5rem',
        fontWeight: 'bold',
        fontFamily: ['Raleway', 'sans-serif'].join(','),
        marginBottom: '3vh'
    },
    mainImg: {
        height: '50vh',
        width: '40vw'
    },
    findbtn: {
        position: 'relative',
        fontSize: "1.25rem",
        fontWeight: 'bold',
        backgroundColor: "#DCF2F9",
        height: '6vh',
        width: '13vw',
        border: '0',
        margin: '30px',
        borderRadius: '15px',
        cursor: 'pointer',
        '&:hover': {
            scale: '1.05',
            transition: 'ease 0.2s'
        },
    },
    carousel: {
        marginLeft: '5%'
    },
    sections: {
        width: '100%',
        height: '6vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3vh 0',
        backgroundColor: '#DCF2F9',
    },
    section: {
        textDecoration: 'none',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        margin: '0 20px',
        color: 'black'
    },
    brands: {
        width: '100%',
        height: '10vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: '10vh 0',
    },
    branddiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    brand: {
        height: '8vh',
        padding: '8px',
        aspectRatio: '1'
    },
    sectnhead: {
        margin: '0 auto',
        backgroundColor: '#DCF2F9',
        width: 'fit-content',
        padding: '5px 35px'
    },
    cheapest: {
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10vh 0.8vw',
        width: '12vw',
        textAlign: 'center',
        borderLeft: '1px solid purple',
        borderRight: '1px solid purple',
        '&:hover': {
            boxShadow: '0px 5px 10px 2px rgba(0,255,255,0.7);',
            scale: '1.05'
        },
        transition: 'ease 0.3s'
    }
}));

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/filter");
    };

    const { classes } = useStyles();
    const sections = ['Brands', 'Cheapest', 'Top Rated']
    const routes = ['/#brands', '/#cheapest', '/#top-rated']

    return <div>
        <Header />
        <div className={classes.root}>
            <div className={classes.tagline}>
                <Typography className={classes.heading} variant="h1">Find the phone that suits you the most</Typography>
                <Typography variant="h5">Finding the right phone in today's world is a tedious job, let us help you with that!</Typography>
                <button className={classes.findbtn} onClick={handleClick}>Find your phone</button>
            </div>
            <div>
                <img className={classes.mainImg} src={require('../images/mainImg.jpg')} alt='mainimg' />
            </div>
        </div>
        <div className={classes.carousel}>
            <Carousels />
        </div>
        <div className={classes.sections}>
            {sections.map((section, index) => (
                <Link
                    to={routes[index]}
                    key={section}
                    className={classes.section}
                >
                    {section}
                </Link>
            ))}
        </div>
        <div className={classes.sectnhead}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>Top Brands </Typography>
        </div>
        <div id='brands' className={classes.brands}>
            <div className={classes.branddiv}>
                <img className={classes.brand} src={require('../images/samsung.jpg')} alt='brand' />
                <Typography variant="h5" >Samsung</Typography>
            </div>
            <div className={classes.branddiv}>
                <img className={classes.brand} src={require('../images/apple.jpg')} alt='brand' />
                <Typography variant="h5" >Apple</Typography>
            </div>
            <div className={classes.branddiv}>
                <img className={classes.brand} src={require('../images/google.png')} alt='brand' />
                <Typography variant="h5" >Google</Typography>
            </div>
            <div className={classes.branddiv}>
                <img className={classes.brand} src={require('../images/oneplus.png')} alt='brand' />
                <Typography variant="h5" >OnePlus</Typography>
            </div>
            <div className={classes.branddiv}>
                <img className={classes.brand} src={require('../images/oppo.png')} alt='brand' />
                <Typography variant="h5" >Oppo</Typography>
            </div>
            <div className={classes.branddiv}>
                <img className={classes.brand} src={require('../images/xiaomi.png')} alt='brand' />
                <Typography variant="h5" >Xiaomi</Typography>
            </div>
        </div>
        <div className={classes.sectnhead}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>Cheapest</Typography>
        </div>
        <div id='cheapest' style={{ marginLeft: '1.5vw' }}>
            {cheapest.map((data) => (
                <Cards 
                    key={data.id}
                    id={data.id}
                    img={data.image}
                    name={data.name}
                    price={data.price}
                />
            ))};
        </div>
        <div className={classes.sectnhead}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>Top Rated </Typography>
        </div>
        <div id='top-rated' style={{ marginLeft: '1.5vw' }}>
        {toprated.map((data) => (
                <Cards 
                    key={data.id}
                    id={data.id}
                    img={data.image}
                    name={data.name}
                    price={data.price}
                />
            ))};
        </div>
        {/* <button className={classes.movetoTop} onClick={handleScroll}>Move to Top</button> */}
        <Footer />
    </div>
}
export default Home;