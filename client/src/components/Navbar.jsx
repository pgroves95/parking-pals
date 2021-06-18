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
import "../App.css";
import Payment from "./Payment";

export default function Navbar() {
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
					<Link className="main-link" to="/registeruser">
						User Registration
					</Link>
					<Link className="main-link" to="/profile">
						Profile
					</Link>
					<Link className="main-link" to="/searchresults">
						SearchResults
					</Link>
					<Link className="main-link" to="/result">
						OneDriveway
					</Link>
					<Link className="main-link" to="/payment">
						Make Payment
					</Link>
					<Link className="main-link" to="/login">
						Log In
					</Link>
					<Link className="main-link" to="/">
						Log Out
					</Link>
				</div>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/faq" component={FAQ} />
					<Route path="/login" component={Login} />
					<Route path="/registeruser" component={RegisterUser} />
					<Route path="/profile" component={ProfileUser} />
					<Route path="/payment" component={Payment} />
					<Route path="/searchresults" component={DrivewayResults} />
					<Route path="/result" component={DrivewayIndividual} />
					<Route path="*" component={Error} />
				</Switch>
			</Router>
		</div>
	);
}
