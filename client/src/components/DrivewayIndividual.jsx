import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import {showOneDriveway} from "../actions/one-driveway-actions"
import Paper from "@material-ui/core/Paper";
import "../App.css";
import emptyDriveway from "../assets/images/emptydriveway.png";


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

export default function DrivewayIndividual({ match }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const dbDrivewayList = useSelector((state) => state.dbDrivewayList)
	const oneDriveway = useSelector((state) => state.oneDriveway)
	const drivewayNumber = parseInt(match.params.id)

	// const calculateTotal = () => {
	// 	const endTime = "" // convert to minutes
	// 	const startTime = "" // convert to minutes
	// 	const rate = ""
	// 	const totalTime = endTime-startTime/60*rate
	// }

	useEffect(() => {
		const getDriveway = () => {
		  const drivewayToShow = dbDrivewayList.filter((driveway) => driveway.id === drivewayNumber);
		  showOneDriveway(dispatch, drivewayToShow);
		};
		getDriveway();
	  }, []);

	return (
		<div>
			<div className="title">
				<h1>{oneDriveway[0].address}</h1>
			</div>
			<div className="info-and-reserve">
				<div className="pic-and-desc">
					<img src={emptyDriveway} alt="driveway" />
					<p>
						{oneDriveway[0].description}
					</p>
				</div>
				<div className={classes.root}>
					<Paper elevation={3}>
						<h2>${oneDriveway[0].rate} / hr</h2>
						<br></br>
						<form action="http://localhost:3001/api/reservations/new" method="POST">
							<p>Date:</p>
							<input name="date" type="date" required />
							<p>Drop Off:</p>
							<input step="900" name="start_req" type="time" required />
							<p>Pick Up:</p>
							<input step="900" name="end_req" type="time" required />
							<br></br>
							<br></br>
							<p>
								<b>Total:</b> $90
							</p>
							<br></br>
							<input type="hidden" name="driveway_id" value={oneDriveway[0].id} />
							<button>Reserve</button>
						</form>
					</Paper>
				</div>
			</div>
		</div>
	);
}
