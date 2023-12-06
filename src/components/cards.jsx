import { makeStyles } from 'tss-react/mui';
import React from 'react'
import { Link} from 'react-router-dom';
import { Typography } from '@mui/material';

const useStyles = makeStyles()(() => ({
    root: {
        display: 'inline-flex',
        justifyContent: 'space-around',
        alignItems: 'center',
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

const Cards = ({id,img,name,price}) => {
    const { classes } = useStyles();

    return (
        <Link to={`/${id}`} style={{ textDecoration: "none" }}>
        <div className={classes.root}>
                <div className={classes.cheapest}>
                    <div>
                        <img src={img} alt={name} />
                    </div>
                    <div>
                        <Typography variant="h6">{name}</Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1">Rs. {price}</Typography>
                    </div>
                </div>
        </div>
        </Link>
    )
}

export default Cards;