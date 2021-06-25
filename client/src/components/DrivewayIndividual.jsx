import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import {showOneDriveway} from "../actions/one-driveway-actions"
import {getLoginStatus} from "../actions/login-actions"
import { Link, useHistory } from "react-router-dom";
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
	const profileData = useSelector((state) => state.profileData)
	const errorMessage = useSelector((state) => state.loginStatus)
	const drivewayNumber = parseInt(match.params.id)
	const history = useHistory();
	const [date,setDate] = useState("")
	const [end_req,setEnd_req] = useState("")
	const [start_req,setStart_req] = useState("")

	useEffect(() => {
		const getDriveway = () => {
		  const drivewayToShow = dbDrivewayList.filter((driveway) => driveway.id === drivewayNumber);
		  showOneDriveway(dispatch, drivewayToShow);
		};
		getDriveway();
	}, []);

	const handleYOSubmit = (e) => {
		e.preventDefault();
		fetch("http://localhost:3001/api/reservations/new", {
			method: "POST",
			
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				date,
				driveway_id: oneDriveway[0].id,
				end_req,
				start_req,
				stripe_charge_id: null,
				user_id: profileData.id,
			}),

		})
			.then((res) => res.json())
			.then((data) => {
				if (data.message) {
					history.push("/login");
					getLoginStatus(dispatch, "Please login to reserve driveways")
				} else {
					history.push("/profile");
				}
			});
		return false;
	};
	

	return (
		<div>
			{oneDriveway[0] === undefined ? <div id="reroute-link"><Link to="/searchresults">Something went wrong! Click here to return to the search page and try again</Link><img id="sad-dog-img" src={sad} alt="sad-puppy"/></div> : 
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
						<form onSubmit={(e) => handleYOSubmit(e)} >
							<p>Date:</p>
							<input name="date" type="date" required onChange={(e) => setDate(e.target.value)}/>
							<p>Drop Off:</p>
							<input step="900" name="start_req" type="time" required onChange={(e) => setStart_req(e.target.value)}/>
							<p>Pick Up:</p>
							<input step="900" name="end_req" type="time" required onChange={(e) => setEnd_req(e.target.value)}/>
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
