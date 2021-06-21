import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import emptyDriveway from "../assets/images/emptydriveway.png";
import { Link, useHistory } from "react-router-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "../css/DrivewayResults.css";
import { setSearchCoordinates } from "../actions/search-actions";
import Footer from "./Footer";

mapboxgl.accessToken =
	"pk.eyJ1Ijoid3N2b2JvZGEiLCJhIjoiY2txMTE1cGl2MDVmZzJvcXVibjViMGliaCJ9.13cxlIO8hYUtM1rQuvlbBw";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(32),
			height: theme.spacing(32),
		},
		margin: "auto",
	},
}));

export default function DrivewayResults() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const searchCoordinates = useSelector((state) => state.searchCoordinates);
	const [lng, setLng] = useState(-84.4);
	const [lat, setLat] = useState(33.755);
	const [zoom, setZoom] = useState(14);
	const [search, setSearch] = useState("");
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory();

	// const getDrivewayData = async () => {
	// 	const response = await fetch(DATABASEURL);
	// 	const parsedData = await response.json()
	// 	searchCoordinates(dispatch, parsedData)
	// }

	// useEffect(() => {
	//     getDrivewayData()
	// }, [])

	const getLocation = async () => {
		const response = await fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?&access_token=pk.eyJ1Ijoid3N2b2JvZGEiLCJhIjoiY2txMTE1cGl2MDVmZzJvcXVibjViMGliaCJ9.13cxlIO8hYUtM1rQuvlbBw`,
			{
				headers: { Accept: "application/json" },
			}
		);
		const json = await response.json();
		const coords = json.features[0].center.reverse();
		setSearchCoordinates(dispatch, coords);
		console.log(coords);
	};
	const submitNewLocation = (e) => {
		e.preventDefault();
		getLocation();
		newLocation();
		setSearch("");
	};

	const newLocation = () => {
		if (searchCoordinates[1]) {
			map.current = new mapboxgl.Map({
				container: mapContainer.current,
				style: "mapbox://styles/mapbox/streets-v11",
				center: [searchCoordinates[1], searchCoordinates[0]],
				zoom: zoom,
			});
			let marker1 = new mapboxgl.Marker()
				.setLngLat([searchCoordinates[1], searchCoordinates[0]])
				.addTo(map.current);
		} else {
			map.current = new mapboxgl.Map({
				container: mapContainer.current,
				style: "mapbox://styles/mapbox/streets-v11",
				center: [lng, lat],
				zoom: zoom,
			});
			let marker2 = new mapboxgl.Marker()
				.setLngLat([-84.4008875, 33.755288])
				.addTo(map.current);
		}
	};

	useEffect(() => {
		newLocation();
	}, [searchCoordinates]);

	return (
		<div>
			<form onSubmit={submitNewLocation} className="search-bar">
				<input
					id="landing-search-input"
					type="search"
					placeholder="Input new destination"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					required
				/>
				<button id="main-search-button">Search</button>
			</form>
			<h1>Search Results</h1>
			<div className="results-and-map">
				<div className="search-results">
					<div className={classes.root}>
						<Paper elevation={3}>
							<img
								className="driveway-pic"
								src={emptyDriveway}
								alt="driveway"
							/>
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
							<img
								className="driveway-pic"
								src={emptyDriveway}
								alt="driveway"
							/>
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
							<img
								className="driveway-pic"
								src={emptyDriveway}
								alt="driveway"
							/>
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
							<img
								className="driveway-pic"
								src={emptyDriveway}
								alt="driveway"
							/>
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
			<Footer />
		</div>
	);
}
