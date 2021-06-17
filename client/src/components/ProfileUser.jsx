import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import avatar from "../assets/images/avatar.png"
import "../App.css"

const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  '& > *': {
		margin: "auto",
	  },
	},
	large: {
	  width: theme.spacing(7),
	  height: theme.spacing(7),
	},
	rootCard: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
		  margin: theme.spacing(1),
		  width: theme.spacing(32),
		  height: theme.spacing(56),
		  paddingTop: "5%"
		},
	  },
  }));

export default function ProfileUser() {
	const classes = useStyles();
	const dispatch = useDispatch()
	const profileData = useSelector(state=>state.profileData)

	// const getUserData = async () => {
	// 	const response = await fetch(DATABASEURL);
	// 	const parsedData = await response.json()
	// 	getUserData(dispatch, parsedData)
	// }

	// useEffect(() => {
    //     getUserData()
    // }, [])

	return 	<div>
		<div className="info-card">
			<div className={classes.rootCard}>
			<Paper elevation={3} >
				<div className={classes.root}>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
    			</div>
	  <h3>Whitney Svoboda</h3>
	  <p>Grapevine, TX</p>
			</Paper>
			<div className="history">
				<h2>Hi, Whitney</h2>
				<br></br>
				<p>You have rented 6 driveways!</p>
				<br></br>
				<h4>Your Upcoming Reservations:</h4>
				<br></br>
				<h4>Your reviews:</h4>
				<br></br>
				<p>"Great spot for the big game!"</p>
				<p>"I felt safe walking from this location."</p>
				<p>"A bird pooped on my car."</p>
				<p>"The owner gave me a ride to the stadium!"</p>
				<p>"Expensive, but worth it."</p>
			</div>
			</div>
			</div>
			</div>;
}
