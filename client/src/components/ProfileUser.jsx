
import { useSelector, useDispatch  } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import avatar from "../assets/images/avatar.png";
import sad from "../assets/images/lostdog.png";
import { dbReservations } from "../actions/db-reservations-actions";
import React, { useEffect} from "react";



import "../App.css";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		"& > *": {
			margin: "auto",
		},
	},
	large: {
		width: theme.spacing(9),
		height: theme.spacing(9),
		padding: 4,
	},
	rootCard: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(32),
			height: theme.spacing(40),
			paddingTop: "5%",
		},
	},
}));

export default function ProfileUser() {
	const dbReservationsList = useSelector((state) => state.dbReservationsList);
	const dispatch = useDispatch();
	const classes = useStyles();
	const profileData = useSelector((state) => state.profileData);
	
	// reuse of driveway function
	
	const getReservationsData = async () => {
		const response = await fetch(`http://localhost:3001/api/reservations/${profileData.id}`, {
			method: "GET",
		});
		const parsedData = await response.json();
		dbReservations(dispatch, parsedData);
		
	};

	useEffect(() => {
		getReservationsData();
	}, []);
	
	return (
		<div>
			<div className="card-and-history">
			<div className="info-card">
				<div className={classes.rootCard}>
					<Paper elevation={3}>
						<div className={classes.root}>
							<Avatar alt="avatar" src={avatar} className={classes.large} />
						</div>
						<h3>
							{profileData.first_name} {profileData.last_name}
						</h3>
						<p>{profileData.email}</p>
						<p>{profileData.access}</p>
						<p>{profileData.license_plate.toUpperCase()}</p>
						<p>{profileData.phone}</p>
					</Paper>
					</div>
					</div>
					<div className="history">
						<h2>Hi, {profileData.first_name}</h2>

					</div>
				</div>
				<div className="results-and-map">
					<div className="search-results">
						{dbReservationsList.length > 1 ? (
							dbReservationsList.map((reservations) => (
								<div><h1>{reservations.address}</h1></div>
								// <div className={classes.root}>
								// 	<Paper elevation={3}>
								// 		<div className="card-contents">
								// 			<div className="pic-and-address">
								// 		{/* <img
								// 			className="driveway-pic"
								// 			// src={emptyDriveway}
								// 			alt="driveway"
								// 		/> */}
								// 		<h2>{reservations.address}</h2>
								// 		</div>
								// 		<div className="price-and-link">
								// 		<h4>${reservations.rate} / hour</h4>
	
								// 		</div>
								// 		</div>
								// 	</Paper>
								// </div>
							))
						) : (
							<p>Loading...</p>
						)}
				</div>
			</div>	
		</div>
	);
}
