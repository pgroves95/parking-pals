import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import emptyDriveway from "../assets/images/emptydriveway.png";
import { Link, useHistory } from "react-router-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "../css/DrivewayResults.css";
import { setSearchCoordinates } from "../actions/search-actions";
import { dbDriveways } from "../actions/db-driveways-actions";
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
	const searchCoordinates = useSelector((state) => state.searchCoordinates);
	const dbDrivewayList = useSelector((state) => state.dbDrivewayList);
	const [lng, setLng] = useState(-84.4);
	const [lat, setLat] = useState(33.755);
	const [zoom, setZoom] = useState(14);
	const [search, setSearch] = useState("");
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory();

	const getDrivewayData = async () => {
		const response = await fetch("http://localhost:3001/api/driveways", {
			method: "GET",
		});
		const parsedData = await response.json();
		dbDriveways(dispatch, parsedData);
	};

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
			var map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/mapbox/streets-v11',
				center: [-84.4008875
					, 33.755288
				],
				zoom: 14.5
				});
				let marker1 = new mapboxgl.Marker()
				.setLngLat([-84.4008875, 33.755288])
				.addTo(map);
				map.on('load', function () {
					map.addSource('places', {
					// This GeoJSON contains features that include an "icon"
					// property. The value of the "icon" property corresponds
					// to an image in the Mapbox Streets style's sprite.
					'type': 'geojson',
					'data': {
					'type': 'FeatureCollection',
					'features': [
					{
					'type': 'Feature',
					'properties': {
					'description':
					'<strong>139 Sunset Ave NW, Atlanta, GA 30314</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">View More</a></p>',
					'icon': 'veterinary-15'
					},
					'geometry': {
					'type': 'Point',
					'coordinates': [-84.409680, 33.758490]
					}
					},
					{
					'type': 'Feature',
					'properties': {
					'description':
					'<strong>603 Delbridge St NW, Atlanta, GA 30314</strong><p><a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">View More</a></p>',
					'icon': 'veterinary-15'
					},
					'geometry': {
					'type': 'Point',
					'coordinates': [-84.407160, 33.757660]
					}
					},
					{
					'type': 'Feature',
					'properties': {
					'description':
					'<strong>559 Magnolia St NW, Atlanta, GA 30314</strong><p><a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">View More</a></p>',
					'icon': 'veterinary-15'
					},
					'geometry': {
					'type': 'Point',
					'coordinates': [-84.405807, 33.758228]
					}
					},
					{
					'type': 'Feature',
					'properties': {
					'description':
					'<strong>671 Delbridge St NW, Atlanta, GA 30314</strong><p><a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">View More</a></p>',
					'icon': 'veterinary-15'
					},
					'geometry': {
					'type': 'Point',
					'coordinates': [-84.40829, 33.7577]
					}
					},
					{
					'type': 'Feature',
					'properties': {
					'description':
					'<strong>601 University Pl NW, Atlanta, GA 30314</strong><p><a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">View More</a></p>',
					'icon': 'veterinary-15'
					},
					'geometry': {
					'type': 'Point',
					'coordinates': [-84.407378
						, 33.755967
					]
					}
					},
					
					]
					}
					});
					// Add a layer showing the places.
					map.addLayer({
					'id': 'places',
					'type': 'symbol',
					'source': 'places',
					'layout': {
					'icon-image': '{icon}',
					'icon-allow-overlap': true
					}
					});
					 
					// When a click event occurs on a feature in the places layer, open a popup at the
					// location of the feature, with description HTML from its properties.
					map.on('click', 'places', function (e) {
					var coordinates = e.features[0].geometry.coordinates.slice();
					var description = e.features[0].properties.description;
					 
					// Ensure that if the map is zoomed out such that multiple
					// copies of the feature are visible, the popup appears
					// over the copy being pointed to.
					while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
					coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
					}
					 
					new mapboxgl.Popup()
					.setLngLat(coordinates)
					.setHTML(description)
					.addTo(map);
					});
					 
					// Change the cursor to a pointer when the mouse is over the places layer.
					map.on('mouseenter', 'places', function () {
					map.getCanvas().style.cursor = 'pointer';
					});
					 
					// Change it back to a pointer when it leaves.
					map.on('mouseleave', 'places', function () {
					map.getCanvas().style.cursor = '';
					});
					});	
	};

	useEffect(() => {
		newLocation();
		getDrivewayData();
	}, [searchCoordinates]);

	return (
		<div>
			<div className="driveway-results-div">
				<form onSubmit={submitNewLocation} className="results-search-bar">
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
						{dbDrivewayList.length > 1 ? (
							dbDrivewayList.map((driveway) => (
								<div className={classes.root}>
									<Paper elevation={3}>
										<img
											className="driveway-pic"
											src={emptyDriveway}
											alt="driveway"
										/>
										<h2>{driveway.address}</h2>
										<br></br>
										<p>${driveway.rate} / hour</p>
										<br></br>
										<Link to={`/driveway/${driveway.id}`}>More</Link>
									</Paper>
								</div>
							))
						) : (
							<p>No results!</p>
						)}
					</div>
				<div id="map"></div>
				</div>
			</div>
		</div>
	);
}
