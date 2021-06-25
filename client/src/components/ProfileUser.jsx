import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import avatar from "../assets/images/avatar.png";
import { dbReservations } from "../actions/db-reservations-actions";
import React, { useEffect} from "react";
import sad from "../assets/images/lostdog.png"
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
	reservCard: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(42),
			height: theme.spacing(16),
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
		const response = await fetch(
			`http://localhost:3001/api/reservations/${profileData.id}`,
			{
				method: "GET",
			}
		);
		const parsedData = await response.json();
		dbReservations(dispatch, parsedData);
	};

	const deleteReservation = async (id) => {
		const response = await fetch(
			`http://localhost:3001/api/reservations/${profileData.id}`,
			{
				method: "DELETE",
				body: JSON.stringify({
					id: id,
				}),
			}
		);
		const parsedData = await response.json();
		getReservationsData();
	};

	const formatDate = (date) => {
		let newDate = date.substring(0, 10).split("-");
  if (newDate[1] === "01") {
    return <p><b>January {newDate[2]}, {newDate[0]}</b></p>;
  }
  if (newDate[1] === "02") {
    return <p><b>February {newDate[2]}, {newDate[0]}</b></p>;
  }
  if (newDate[1] === "03") {
    return <p><b>March {newDate[2]}, {newDate[0]}</b></p>;
  }
  if (newDate[1] === "04") {
    return <p><b>April {newDate[2]}, {newDate[0]}</b></p>;
  }
  if (newDate[1] === "05") {
    return <p><b>May {newDate[2]}, {newDate[0]}</b></p>;
  }
  if (newDate[1] === "06") {
    return <p><b>June {newDate[2]}, {newDate[0]}</b></p>;
  }
  if (newDate[1] === "07") {
    return <p><b>July {newDate[2]}, {newDate[0]}</b></p>;
  }
  if (newDate[1] === "08") {
    return <p><b>August {newDate[2]}, {newDate[0]}</b></p>;
  }
  if (newDate[1] === "09") {
    return <p><b>September {newDate[2]}, {newDate[0]}</b></p>;
  }
  if (newDate[1] === "10") {
    return <p><b>October {newDate[2]}, {newDate[0]}</b></p>;
  }
  if (newDate[1] === "11") {
    return <p><b>November {newDate[2]}, {newDate[0]}</b></p>;
  }
  if (newDate[1] === "12") {
    return <p><b>December {newDate[2]}, {newDate[0]}</b></p>;
  } else return <p><b>{newDate}</b></p>
		}

	useEffect(() => {
		getReservationsData();
	}, []);

	return (
		<div className = "profile-user">
			{profileData.license_plate === undefined ? <div id="reroute-link"><Link to="/login">Something went wrong! Click here to login again</Link><img id="sad-dog-img" src={sad} alt="sad-puppy"/></div> : 
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
						<br></br>
						<p><b>Email</b><br></br>
						{profileData.email}</p>
						<br></br>
						<div id="license-and-phone">
						<p><b>Lincense Plate</b><br></br> 
						{profileData.license_plate.toUpperCase()}</p>
						<br></br>
						<p><b>Phone</b><br></br>
						{profileData.phone}</p>
						</div>
					</Paper>
					</div>
					</div>
					<div className="history">
						<h2>Hi, {profileData.first_name}</h2>
						<br></br>
						<h3><u>Your Reservations</u></h3>
			<div className="newRes">
				{dbReservationsList.length > 0 ? (
					dbReservationsList.map((reservation) => (
						<div className="info-card">
				<div className={classes.reservCard}>
					<Paper elevation={3}>
						<h3>
							{reservation.Driveway.address}
						</h3>
						{formatDate(`${reservation.date}`)}
						<p>Start: {reservation.start_req}</p>
						<p>End: {reservation.end_req}</p>
						<p>{reservation.rate}</p>
						<button id="cancel-button" onClick={()=>{deleteReservation(reservation.id)}}>Cancel Reservation</button>
					</Paper>
					</div>
					</div>
					))
				) : (<div id="no-reservations">
					<p>No Reservations!</p><Link to="/"><button id="back-button">Start Your Search</button></Link></div>
				)}
			</div>
					</div>
				</div>
}
		</div>
	);
}