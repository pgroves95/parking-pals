import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
// import { getUserData } from "../actions/profile-actions";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import avatar from "../assets/images/avatar.png";
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
			height: theme.spacing(56),
			paddingTop: "5%",
		},
	},
}));

export default function ProfileUser() {
	const classes = useStyles();
	// const dispatch = useDispatch();
	const profileData = useSelector((state) => state.profileData);

	// const getUserInfo = async () => {
	// 	const response = await fetch(`http://localhost:3001/api/users/3`);
	// 	const parsedData = await response.json();
	// 	getUserData(dispatch, parsedData);
	// };

	// useEffect(() => {
	// 	getUserInfo();
	// }, []);

	return (
		<div>
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
					<div className="history">
						<h2>Hi, {profileData.first_name}</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
