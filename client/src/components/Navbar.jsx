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
import "../App.css";
import Payment from "./Payment";

export default function Navbar() {
	const dispatch = useDispatch();
	const profileData = useSelector((state) => state.profileData);

	const logout = () => {
		fetch("http://localhost:3001/api/users/logout", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}).then((data) => console.log(data))
		getUserData(dispatch, {});;
	}
	return (
		<div id="main-navbar">
			<Router>
				<div className="navbar-links">
					<Link className="main-link" to="/">
						Home
					</Link>
					<Link className="main-link" to="/faq">
						FAQ
					</Link>
					{profileData.id ? <div><Link className="main-link" to="/profile">
						Profile
					</Link><Link className="main-link" to="/" onClick={()=>{logout()}}>
						Log Out 
					</Link></div>:<div><Link className="main-link" to="/registeruser">
						User Registration
					</Link><Link className="main-link" to="/login">
						Log In
					</Link></div>}
					
					
					{/* <Link className="main-link" to="/searchresults">
						SearchResults
					</Link>
					<Link className="main-link" to="/result">
						OneDriveway
					</Link>
					<Link className="main-link" to="/payment">
						Make Payment
					</Link> */}
					
					
				</div>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/faq" component={FAQ} />
					<Route path="/login" component={Login} />
					<Route path="/registeruser" component={RegisterUser} />
					<Route path="/profile" component={ProfileUser} />
					<Route path="/payment" component={Payment} />
					<Route path="/searchresults" component={DrivewayResults} />
					<Route path="/driveway/:id" component={DrivewayIndividual} />
					<Route path="*" component={Error} />
				</Switch>
			</Router>
		</div>
	);
}
