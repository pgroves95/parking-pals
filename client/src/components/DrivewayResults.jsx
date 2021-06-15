import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import emptyDriveway from "../assets/images/emptydriveway.png"
import { Link } from "react-router-dom";
import map from "../assets/images/map.PNG"
import "../App.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(32),
    },
	margin: "auto"
  },
}));

export default function DrivewayResults() {
	const classes = useStyles();
	return <div>
		<h1>Search Results</h1>
		<div className="results-and-map">
		<div className="search-results">
		<div className={classes.root}>
      <Paper elevation={3}>
		<img className="driveway-pic" src={emptyDriveway} alt="driveway"/>
		<h2>Close to everything</h2>
		<p>1000ft from destination</p>
		<br></br>
		<p>$10 / hour</p>
		<br></br>
		<Link to="/">More</Link>
	  </Paper>
    </div>
	<div className={classes.root}>
      <Paper elevation={3}>
		<img className="driveway-pic" src={emptyDriveway} alt="driveway"/>
		<h2>Enjoy the game</h2>
		<p>1.5 miles from destination</p>
		<br></br>
		<p>$5 / hour</p>
		<br></br>
		<Link to="/">More</Link>
	  </Paper>
    </div>
	<div className={classes.root}>
      <Paper elevation={3}>
		<img className="driveway-pic" src={emptyDriveway} alt="driveway"/>
		<h2>You're in good hands</h2>
		<p>500ft from destination</p>
		<br></br>
		<p>$20 / hour</p>
		<br></br>
		<Link to="/">More</Link>
	  </Paper>
    </div>
	<div className={classes.root}>
      <Paper elevation={3}>
		<img className="driveway-pic" src={emptyDriveway} alt="driveway"/>
		<h2>Free carwash included</h2>
		<p>3 miles from destination</p>
		<br></br>
		<p>$1 / hour</p>
		<br></br>
		<Link to="/">More</Link>
	  </Paper>
    </div>
	</div>
	<img className="map-of-spots" src={map} alt="map"/>
	</div>
	</div>
}
