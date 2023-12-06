import { makeStyles } from 'tss-react/mui';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { phones } from './carouseldata';
import { Typography } from '@mui/material';

const useStyles = makeStyles()(() => ({
    root: {
        display: "flex",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: "lightgrey",
        width: "95%",
        height: "30vh",
        marginTop:"10vh",
        borderRadius:'20px'
    },
    image: {
        height:'25vh',
        width: '20vw',
        borderRadius: '10px'
    },
    heading:{
        fontSize: '2rem'
    },
    subtitle:{
        fontSize: '1.3rem'
    }
}));

const Carousels = () => {
    const {classes} = useStyles();
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return <div>
        <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={false}
            showDots={false}
            infinite={true}
            autoPlay={true}
            centreMode={true}
            autoPlaySpeed={3500}
            keyBoardControl={true}
            arrows={false}
            containerClass
        >
            {phones.map((data) => <div className={classes.root} key={data.id}>
                <div>
                    <img className={classes.image} src={data.img} alt="phone" />
                </div>
                <div>
                    <div>
                    <Typography className={classes.heading} variant="h3">Starting at just Rs.{data.price}</Typography>
                    </div>
                    <div>
                    <Typography className={classes.subtitle} variant="h5">{data.caption}</Typography>
                    </div>
                </div>
            </div>)}

        </Carousel>
    </div>
}
export default Carousels;