import React from "react";
import Landing from "./Landing";
import FAQ from "./FAQ";
import Error from "./Error";
import ProfileUser from "./ProfileUser";
import RegisterUser from "./RegisterUser";
import DrivewayResults from "./DrivewayResults";
import DrivewayIndividual from "./DrivewayIndividual";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../actions/profile-actions";
import icon from "../assets/images/final-color.png";
import "../App.css";

export default function Navbar() {
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
							<div>
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
							<div>
								<Link className="main-link" to="/registeruser">
									User Registration
								</Link>
								<Link className="main-link" to="/login">
									Log In
								</Link>
							</div>
						)}
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
