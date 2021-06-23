import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import {showOneDriveway} from "../actions/one-driveway-actions"
import Paper from "@material-ui/core/Paper";
import "../App.css";
import emptyDriveway from "../assets/images/emptydriveway.png";
import {useHistory } from "react-router-dom";
// import e from "express";


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
	const profileData = useSelector((state) => state.profileData)
	const drivewayNumber = parseInt(match.params.id)
	const history = useHistory();
	const [date,setDate] = useState("")
	const [driveway_id,setDriveway_id] = useState("")
	const [end_req,setEnd_req] = useState("")
	const [start_req,setStart_req] = useState("")

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
				} else {
					history.push("/profile");
				}
			});
		return false;
	};
	

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
						<form onSubmit={(e) => handleYOSubmit(e)} >
							<p>Date:</p>
							<input name="date" type="date" required onChange={(e) => setDate(e.target.value)}/>
							<p>Drop Off:</p>
							<input step="900" name="start_req" type="time" required onChange={(e) => setStart_req(e.target.value)}/>
							<p>Pick Up:</p>
							<input step="900" name="end_req" type="time" required onChange={(e) => setEnd_req(e.target.value)}/>
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
