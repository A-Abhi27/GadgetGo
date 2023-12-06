import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { phoneData } from './phoneData';

const useStyles = makeStyles()(() => ({
  root: {
    display: "flex",
    justifyContent: 'space-evenly',
    alignItems: 'normal',
    width: "95vw",
    padding: '1vh 2.5vw',
    marginTop: '3vh'
  },
  img: {
    height: '65vh',
    width: '25vw'
  },
  details: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60vw'
  },
  heading: {
    display: "flex",
    backgroundColor: '#DCF2F9',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '55vw',
    padding: '1vh 3vw',
    margin: '0 0 3vh 0',
    borderRadius: '15px'
  },
  head1: {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
  },
  head2: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  specs: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gap: '2rem 5rem',
    margin: '2vh',
    padding: '4vh',
    width: '55vw',
    backgroundColor: '#DCF2F9',
    borderRadius: '15px'
  },
  desc1: {
    display: 'flex',
    margin: '0.5vh 2vh',
    padding: '0.25vh 2vw',
    width: '25vw',
  },
  desc2: {
    display: 'flex',
    flexDirection: 'column',
    margin: '2vh',
    padding: '2vh 2vw',
    width: '25vw',
    height:'28vh',
    backgroundColor: 'lightgrey',
    wordBreak: 'break-word',
    borderRadius: '15px',
    overflow:'scroll'
  },
  addtnfeat: {
    display: 'flex',
    flexDirection: 'column',
    margin: '.01vh',
    padding: '2vh 2vw',
    width: '55vw',
    backgroundColor: '#DCF2F9',
    borderRadius: '15px'
  }
}));

const Details = () => {
  const { classes } = useStyles();
  const {id} = useParams();
  const data = phoneData.find(el => el.id === id.toString());

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <div>
          <div className={classes.desc1}>
            <img className={classes.img} src={data.image} alt={data.name}></img>
          </div>
          <div className={classes.desc2}>
            <div>
              <Typography variant="h5" >Description: </Typography>
              <Typography variant="subtitle1" style={{lineHeight:'1.5rem'}}>{data.description}</Typography>
            </div>
          </div>
        </div>
        <div className={classes.details}>
          <div className={classes.heading}>
            <div className={classes.head1}>
              <Typography variant="h3" >{data.name}</Typography>
              <Typography variant="subtitle1">Release Date: {data.released}</Typography>
            </div>
            <div className={classes.head2}>
              <Typography variant="subtitle1">Estimated Price: </Typography>
              <Typography variant="h4" >Rs. {data.price}</Typography>
            </div>
          </div>
          <div>
            <Typography variant="h5" style={{ fontWeight: 'bold', backgroundColor: '#DCF2F9', padding: '0 2vh' }}>Key Specs </Typography>
          </div>
          <div className={classes.specs}>
            <div>
              <Typography variant="h5" >Platform: </Typography>
              <Typography variant="subtitle1">{data.platform}</Typography>
            </div>
            <div>
              <Typography variant="h5" >Display: </Typography>
              <Typography variant="subtitle1">{data.display}</Typography>
            </div>
            <div>
              <Typography variant="h5" >Camera: </Typography>
              <Typography variant="subtitle1">Main Cameras: {data.main_camera}</Typography>
              <Typography variant="subtitle1">Front Cameras: {data.selfie_camera}</Typography>
            </div>
            <div>
              <Typography variant="h5" >Memory: </Typography>
              <Typography variant="subtitle1">Ram: {data.memory.ram} GB</Typography>
              <Typography variant="subtitle1">Rom: {data.memory.rom} GB</Typography>
              <Typography variant="subtitle1">Cardslot: {data.memory.cardslot}</Typography>
            </div>
            <div>
              <Typography variant="h5" >Battery: </Typography>
              <Typography variant="subtitle1">{data.battery}</Typography>
            </div>
            <div>
              <Typography variant="h5" >Connectivity: </Typography>
              <Typography variant="subtitle1">{data.communication}</Typography>
            </div>
          </div>
          <div className={classes.addtnfeat}>
            <Typography variant="h5" >Additional Features: </Typography>
            <Typography variant="subtitle1">{data.features}</Typography>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Details;