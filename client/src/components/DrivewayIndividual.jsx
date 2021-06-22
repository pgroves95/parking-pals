import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "../App.css";
import emptyDriveway from "../assets/images/emptydriveway.png";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(32),
			height: theme.spacing(36),
			paddingTop: "5%",
		},
		margin: "auto",
		paddingRight: "10%",
	},
}));

export default function DrivewayIndividual() {
	const classes = useStyles();

	return (
		<div>
			<div className="title">
				<h1>Address</h1>
				<p>1000ft from destination</p>
			</div>
			<div className="info-and-reserve">
				<div className="pic-and-desc">
					<img src={emptyDriveway} alt="driveway" />
					<p>
						Located just 1000ft from Game Day Stadium, my driveway is the
						perfect place for you to safely keep your car while enjoying the
						game. The driveway faces east so your vehicle stays cool as the day
						passes. Enjoy a complimentary bottle of water upon your return to
						your vehicle.
					</p>
				</div>
				<div className={classes.root}>
					<Paper elevation={3}>
						<h2>$10 / hr</h2>
						<br></br>
						<form action="/reserve" method="POST">
							<p>Date:</p>
							<input name="date" type="date" required />
							<p>Drop Off:</p>
							<input step="900" name="start_request" type="time" required />
							<p>Pick Up:</p>
							<input step="900" name="end_request" type="time" required />
							<br></br>
							<br></br>
							<p>
								<b>Total:</b> $90
							</p>
							<br></br>
							<input type="hidden" name="driver_id" value="params.driver_id" />
							<input type="hidden" name="host_id" value="params.host_id" />
							<button>Reserve</button>
						</form>
					</Paper>
				</div>
			</div>
		</div>
	);
}
