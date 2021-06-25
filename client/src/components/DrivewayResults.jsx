import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import emptyDriveway from "../assets/images/emptydriveway.png";
import { Link } from "react-router-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "../css/DrivewayResults.css";
import { setSearchCoordinates } from "../actions/search-actions";
import { dbDriveways } from "../actions/db-driveways-actions";

mapboxgl.accessToken =
	"pk.eyJ1Ijoid3N2b2JvZGEiLCJhIjoiY2txMTE1cGl2MDVmZzJvcXVibjViMGliaCJ9.13cxlIO8hYUtM1rQuvlbBw";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(64),
			height: theme.spacing(12),
			[theme.breakpoints.only('xs')]: {
				width: theme.spacing(42),
				height: theme.spacing(12),
			  },
		},
		margin: "auto",
		
	},
}));

export default function DrivewayResults() {
	const searchCoordinates = useSelector((state) => state.searchCoordinates);
	const dbDrivewayList = useSelector((state) => state.dbDrivewayList);
	const [search, setSearch] = useState("");
	const dispatch = useDispatch();
	const classes = useStyles();

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
		const coords = json.features[0].center;
		setSearchCoordinates(dispatch, coords);
		console.log(coords);
	};

	const newLocation = () => {
		if (searchCoordinates[1]) {
			var map = new mapboxgl.Map({
				container: "map",
				style: "mapbox://styles/mapbox/streets-v11",
				center: [searchCoordinates[0], searchCoordinates[1]],
				zoom: 14.5,
			});
			let marker1 = new mapboxgl.Marker()
				.setLngLat([searchCoordinates[0], searchCoordinates[1]])
				.addTo(map);
		} else {
			var map = new mapboxgl.Map({
				container: "map",
				style: "mapbox://styles/mapbox/streets-v11",
				center: [-84.4008875, 33.755288],
				zoom: 14.5,
			});
			let marker1 = new mapboxgl.Marker()
				.setLngLat([-84.4008875, 33.755288])
				.addTo(map);
		}
		const allPoints = dbDrivewayList
			.filter((dlist) => dlist.lat_long)
			.map((point) => ({
				type: "Feature",
				properties: {
					description: `<strong>${point.address}</strong><p><Link to="/driveway/${point.id}">
						<p>View More</p>
					</Link></p>`,
					icon: "veterinary-15",
				},
				geometry: {
					type: "Point",
					coordinates: point.lat_long,
				},
			}));
		map.on("load", function () {
			map.addSource("places", {
				type: "geojson",
				data: {
					type: "FeatureCollection",
					features: allPoints,
				},
			});
			map.addLayer({
				id: "places",
				type: "symbol",
				source: "places",
				layout: {
					"icon-image": "{icon}",
					"icon-allow-overlap": true,
				},
			});
			map.on("click", "places", function (e) {
				var coordinates = e.features[0].geometry.coordinates.slice();
				var description = e.features[0].properties.description;

				while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
					coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
				}

				new mapboxgl.Popup()
					.setLngLat(coordinates)
					.setHTML(description)
					.addTo(map);
			});

			map.on("mouseenter", "places", function () {
				map.getCanvas().style.cursor = "pointer";
			});

			map.on("mouseleave", "places", function () {
				map.getCanvas().style.cursor = "";
			});
		});
	};

	const submitNewLocation = (e) => {
		e.preventDefault();
		getLocation();
		setSearch("");
	};

	

	useEffect(() => {
		getDrivewayData();
	}, [searchCoordinates]);
	useEffect(() => {
		newLocation();
	}, [dbDrivewayList]);

	return (
		<div>
			<div className="driveway-results-div">
				<form onSubmit={submitNewLocation} className="results-search-bar">
					<input
						id="results-search-input"
						type="search"
						placeholder="Going somewhere else?"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						required
					/>
					<button id="results-search-button">Search</button>
				</form>
				<h1>Search Results</h1>
				<div className="results-and-map">
					<div className="search-results">
						{dbDrivewayList.length > 1 ? (
							dbDrivewayList.map((driveway) => (
								<div className={classes.root}>
									<Paper elevation={3}>
										<div className="card-contents">
											<div className="pic-and-address">
										<img
											className="driveway-pic"
											src={emptyDriveway}
											alt="driveway"
										/>
										<h2>{driveway.address}</h2>
										</div>
										<div className="price-and-link">
										<h4>${driveway.rate} / hour</h4>
										<Link to={`/driveway/${driveway.id}`}>View More</Link></div>
										</div>
									</Paper>
								</div>
							))
						) : (
							<p>Loading...</p>
						)}
					</div>
					<div id="map"></div>
				</div>
			</div>
		</div>
	);
}
