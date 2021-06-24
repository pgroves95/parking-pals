import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import {showOneDriveway} from "../actions/one-driveway-actions"
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import "../css/DrivewayIndividual.css";
import emptyDriveway from "../assets/images/emptydriveway.png";
import sad from "../assets/images/lostdog.png"


const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(32),
			height: theme.spacing(36),
			paddingTop: "5%",
			[theme.breakpoints.between('xs', 'sm')]: {
				width: theme.spacing(28),
				height: theme.spacing(36),
			  },
		},
		margin: "auto",
	},
}));

export default function DrivewayIndividual({ match }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const dbDrivewayList = useSelector((state) => state.dbDrivewayList)
	const oneDriveway = useSelector((state) => state.oneDriveway)
	const drivewayNumber = parseInt(match.params.id)

	useEffect(() => {
		const getDriveway = () => {
		  const drivewayToShow = dbDrivewayList.filter((driveway) => driveway.id === drivewayNumber);
		  showOneDriveway(dispatch, drivewayToShow);
		};
		getDriveway();
	  }, []);

	return (
		<div>
			{oneDriveway[0] === undefined ? <div id="reroute-link"><Link to="/searchresults">Something went wrong! Return to search page and try again</Link><img id="sad-dog-img" src={sad} alt="sad-puppy"/></div> : 
			<div>
			 <div className="title">
				<h1>{oneDriveway[0].address}</h1>
				<p><Link to="/searchresults">Return to Search Results</Link></p>
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
							<input type="hidden" name="driveway_id" value={oneDriveway[0].id} />
							<button id="reserve-button">Reserve</button>
						</form>
					</Paper>
				</div>
			</div> </div>}
		</div>
	);
}
