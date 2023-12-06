import React, { useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { useLocation } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import { TextField, Typography } from '@mui/material';
import { phoneData } from './phoneData';
import Cards from './cards';

const useStyles = makeStyles()(() => ({
    root: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    searchbar: {
        display: 'flex',
        margin: '4vh 0 3vh 0',
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
    },
    labels: {
        fontSize: '1.5rem'
    },
    grids: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto auto',
        gap: '2rem 3rem',
        padding: '0 4vw',
        borderRadius: '15px',

    },
    grid2: {
        display: 'grid',
        gridTemplateRows: 'auto auto',
        gap: '2rem 3rem',
        margin: '0 2vh',
        padding: '4vh',
        borderRadius: '15px'
    },
    gridhead: {
        margin: '4vh',
        background: "#DCF2F9",
        padding: '0 0.5vw'
    }
}));

const Filter = () => {
    const { classes } = useStyles();
    const location = useLocation();
    const searchterm = location.state;
    const [search, setSearch] = useState(searchterm);
    const [price1, setPrice1] = useState(null);
    const [price2, setPrice2] = useState(null);
    const batteries = [3000, 4000, 5000];
    const ram = [4, 6, 8, 12];
    const storage = [64, 128, 256, 512];
    const main_camera = [8, 16, 32, 50];
    const front_camera = [8, 16, 32, 50];
    const brands = ["Samsung", "Apple", "Xiaomi", "Oppo", "Vivo", "Google", "OnePlus", "Infinix"];
    const [battery, setBattery] = useState(null);
    const [rams, setRams] = useState(null);
    const [storages, setStorages] = useState(null);
    const [maincam, setMaincam] = useState(null);
    const [frontcam, setFrontcam] = useState(null);
    const [brand, setBrand] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [filterRes, setFilterRes] = useState(null);

    const handlebatteryChange = (option) => {
        setBattery(option);
    };
    const handleramChange = (option) => {
        setRams(option);
    };
    const handlestorageChange = (option) => {
        setStorages(option);
    };
    const handlemaincamChange = (option) => {
        setMaincam(option);
    };
    const handlefrontcamChange = (option) => {
        setFrontcam(option);
    };
    const handlebrandChange = (option) => {
        setBrand(option);
    };
    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const filterData = () => {
        if (search!=="" && search!==null) {
        const filteredData = phoneData.filter((item) =>
            item.name.toLowerCase().includes(search)
        );
        setFilteredData(filteredData);
        setFilterRes(null)}

        else if(search===null || search===""){
        const filterRes = phoneData.filter(function (el){
            return ((el.memory.ram >= rams) && (el.memory.rom >= storages) && (el.brand === brand)
                && ((parseInt(el.price) >= price1) && (parseInt(el.price) <= price2))
                && (el.battery2>=battery) && (el.main_camera2>=maincam) && (el.selfie_camera2>=frontcam))
        })
        setFilterRes(filterRes)}

    };

    useEffect(() => {
        filterData()
    }, [search],filteredData);

    return <div>
        <Navbar />
        <div className={classes.root}>
            <div className={classes.searchbar}>
                <TextField InputProps={{ className: classes.input }} label="Search for a phone..." color="primary"
                    onChange={handleInputChange}
                />
                <button className={classes.btn} onClick={filterData}>Go</button>
            </div>
            <div>
                <Typography variant="h4" >Choose Your Filters: </Typography>
            </div>
            <div className={classes.grids}>
                <div className={classes.grid2}>
                    <div>
                        <Typography variant="h5" className={classes.gridhead}>Price: </Typography>
                        <TextField InputProps={{ sx: { height: 40, width: 100 } }} id="outlined-basic" label="From Rs." variant="outlined" onChange={(e) => setPrice1(e.target.value)} />
                        <TextField InputProps={{ sx: { height: 40, width: 100 } }} id="outlined-basic" label="To Rs." variant="outlined" onChange={(e) => setPrice2(e.target.value)} />
                    </div>
                    <div>
                        <Typography variant="h5" className={classes.gridhead}>Battery: </Typography>
                        {batteries.map((item, index) => (
                            <div key={index}>
                                <label>
                                    <input value={item} type="checkbox" checked={battery === item}
                                        onChange={() => handlebatteryChange(item)} />
                                    <span className={classes.labels}> {item} and above</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.grid2}>
                    <div>
                        <Typography variant="h5" className={classes.gridhead}>RAM: </Typography>
                        {ram.map((item, index) => (
                            <div key={index}>
                                <label>
                                    <input value={item} type="checkbox" checked={rams === item}
                                        onChange={() => handleramChange(item)} />
                                    <span className={classes.labels}> {item} and above</span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Typography variant="h5" className={classes.gridhead}>Storage: </Typography>
                        {storage.map((item, index) => (
                            <div key={index}>
                                <label>
                                    <input value={item} type="checkbox" checked={storages === item}
                                        onChange={() => handlestorageChange(item)} />
                                    <span className={classes.labels}> {item} and above</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.grid2}>
                    <div>
                        <Typography variant="h5" className={classes.gridhead}>Main camera: </Typography>
                        {main_camera.map((item, index) => (
                            <div key={index}>
                                <label>
                                    <input value={item} type="checkbox" checked={maincam === item}
                                        onChange={() => handlemaincamChange(item)} />
                                    <span className={classes.labels}> {item} and above</span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Typography variant="h5" className={classes.gridhead}>Front Camera: </Typography>
                        {front_camera.map((item, index) => (
                            <div key={index}>
                                <label>
                                    <input value={item} type="checkbox" checked={frontcam === item}
                                        onChange={() => handlefrontcamChange(item)} />
                                    <span className={classes.labels}> {item} and above</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.grid2}>
                    <div>
                        <Typography variant="h5" className={classes.gridhead}>Brands: </Typography>
                        {brands.map((item, index) => (
                            <div key={index}>
                                <label>
                                    <input value={item} type="checkbox" checked={brand === item}
                                        onChange={() => handlebrandChange(item)} />
                                    <span className={classes.labels}> {item}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <button className={classes.btn} onClick={filterData}>Go</button>
                </div>
            </div>
        </div>
        <div id='cheapest' style={{ marginLeft: '1.5vw' }}>
        {filteredData===null?phoneData.map((data) => (
                <Cards
                    key={data.id}
                    id={data.id}
                    img={data.image}
                    name={data.name}
                    price={data.price}
                />
            )):
            filterRes!==null?filterRes.map((data) => (
                <Cards
                    key={data.id}
                    id={data.id}
                    img={data.image}
                    name={data.name}
                    price={data.price}
                />
            )):filteredData.map((data) => (
                <Cards
                    key={data.id}
                    id={data.id}
                    img={data.image}
                    name={data.name}
                    price={data.price}
                />
            ))}
        </div>
        <Footer />
    </div>
}

export default Filter;