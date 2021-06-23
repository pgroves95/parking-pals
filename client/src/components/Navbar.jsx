import React, { useState } from "react";
import Landing from "./Landing";
import FAQ from "./FAQ";
import Error from "./Error";
import ProfileUser from "./ProfileUser";
import RegisterUser from "./RegisterUser";
import DrivewayResults from "./DrivewayResults";
import DrivewayIndividual from "./DrivewayIndividual";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { getUserData } from "../actions/profile-actions";
import { makeStyles } from "@material-ui/core/styles";
import icon from "../assets/images/final-color.png";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import pawIcon from "../assets/images/orange-paw.png"
import "../css/Navbar.css";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiPaper-root": {
			backgroundColor: "#1E3D58",
			boxShadow: "1px 1px 7px #E8EEF1",
		  },
	}}
));

export default function Navbar() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
  
	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
  
	const handleClose = () => {
	  setAnchorEl(null);
	};
	const dispatch = useDispatch();
	const profileData = useSelector((state) => state.profileData);

	const logout = () => {
		fetch("http://localhost:3001/api/users/logout", {
			method: "GET",
			credentials: 'include',
			headers: {
				"Content-Type": "application/json",
			},
		}).then((data) => console.log(data));
		getUserData(dispatch, {});
	};
	return (
		<div id="main-navbar">
			<Router>
				<div className="navbar-links">
					<div className="logo-div">
						<Link className="main-link" to="/">
							<img src={icon} alt="logo" />
						</Link>
					</div>
					<div className="main-link-div">
						<Link className="main-link" to="/faq">
							FAQ
						</Link>
						{profileData.id ? (
							<div className="side-links">
								<Link className="main-link" to="/profile">
									Profile
								</Link>
								<Link
									className="main-link"
									to="/"
									onClick={() => {
										logout();
									}}
								>
									Log Out
								</Link>
							</div>
						) : (
							<div className="side-links">
								<Link className="main-link" to="/registeruser">
									User Registration
								</Link>
								<Link className="main-link" to="/login">
									Log In
								</Link>
							</div>
						)}
					</div>
					<div className="mobile-link-div">
					<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img className="menu-paw" src={pawIcon} alt="paw"/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
		className={classes.root}
      >
        <MenuItem onClick={handleClose}><Link to="/faq">
							FAQ
						</Link></MenuItem>
						{profileData.id ? (
							<div>
        <MenuItem onClick={handleClose}><Link to="/profile">
		Profile
	</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link
		to="/"
		onClick={() => {
			logout();
		}}
	>
		Log Out
	</Link></MenuItem></div>) : (<div><MenuItem onClick={handleClose}><Link to="/registeruser">
									User Registration
								</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/login">
									Log In
								</Link></MenuItem></div>)}
      </Menu>
				</div>
				</div>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/faq" component={FAQ} />
					<Route path="/login" component={Login} />
					<Route path="/registeruser" component={RegisterUser} />
					<Route path="/profile" component={ProfileUser} />
					<Route path="/searchresults" component={DrivewayResults} />
					<Route path="/driveway/:id" component={DrivewayIndividual} />
					<Route path="*" component={Error} />
				</Switch>
			</Router>
		</div>
	);
}
