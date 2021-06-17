import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import emptyDriveway from "../assets/images/emptydriveway.png"
import { Link } from "react-router-dom";
import "../App.css"
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoid3N2b2JvZGEiLCJhIjoiY2txMTE1cGl2MDVmZzJvcXVibjViMGliaCJ9.13cxlIO8hYUtM1rQuvlbBw';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(32),
    },
	margin: "auto"
  },
}));


export default function DrivewayResults() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-95.62);
	const [lat, setLat] = useState(30.10);
	const [zoom, setZoom] = useState(12);
	const dispatch = useDispatch()
	const drivewaySearch = useSelector(state=>state.drivewaySearch)

	// const getDrivewayData = async () => {
	// 	const response = await fetch(DATABASEURL);
	// 	const parsedData = await response.json()
	// 	drivewayResults(dispatch, parsedData)
	// }

	// useEffect(() => {
    //     getDrivewayData()
    // }, [])
	
	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
		container: mapContainer.current,
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [lng, lat],
		zoom: zoom
		});
		});
	const classes = useStyles();
	
	return <div>
		<h1>Search Results</h1>
		<div className="results-and-map">
		<div className="search-results">
		<div className={classes.root}>
      <Paper elevation={3}>
		<img className="driveway-pic" src={emptyDriveway} alt="driveway"/>
		<h2>Address</h2>
		<p>1000ft from destination</p>
		<br></br>
		<p>$10 / hour</p>
		<br></br>
		<Link to="/result">More</Link>
	  </Paper>
    </div>
	<div className={classes.root}>
      <Paper elevation={3}>
		<img className="driveway-pic" src={emptyDriveway} alt="driveway"/>
		<h2>Address</h2>
		<p>1.5 miles from destination</p>
		<br></br>
		<p>$5 / hour</p>
		<br></br>
		<Link to="/result">More</Link>
	  </Paper>
    </div>
	<div className={classes.root}>
      <Paper elevation={3}>
		<img className="driveway-pic" src={emptyDriveway} alt="driveway"/>
		<h2>Address</h2>
		<p>500ft from destination</p>
		<br></br>
		<p>$20 / hour</p>
		<br></br>
		<Link to="/result">More</Link>
	  </Paper>
    </div>
	<div className={classes.root}>
      <Paper elevation={3}>
		<img className="driveway-pic" src={emptyDriveway} alt="driveway"/>
		<h2>Address</h2>
		<p>3 miles from destination</p>
		<br></br>
		<p>$1 / hour</p>
		<br></br>
		<Link to="/result">More</Link>
	  </Paper>
    </div>
	</div>
	<div ref={mapContainer} className="map-container" />
	</div>
	</div>
}
