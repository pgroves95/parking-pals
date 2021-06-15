import React from "react";
import Landing from "./Landing";
import FAQ from "./FAQ";
import RegisterHost from "./RegisterHost";
import Error from "./Error";
import ProfileUser from "./ProfileUser";
import RegisterUser from "./RegisterUser";
import DrivewayResults from "./DrivewayResults";
import DrivewayIndividual from "./DrivewayIndividual";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
	return (
		<div>
			<Router>
				<div className="navbar-links">
					<Link to="/">Home</Link>
					<Link to="/faq">FAQ</Link>
					<Link to="/registeruser">User Registration</Link>
					<Link to="/registerhost">Host Registration</Link>
					<Link to="/profile">Profile</Link>
					<Link to="/searchresults">SearchResults</Link>
					<Link to="/result">OneDriveway</Link>
				</div>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/faq" component={FAQ} />
					<Route path="/registeruser" component={RegisterUser} />
					<Route path="/registerhost" component={RegisterHost} />
					<Route path="/profile" component={ProfileUser} />
					<Route path="/searchresults" component={DrivewayResults} />
					<Route path="/result" component={DrivewayIndividual} />
					<Route path="*" component={Error} />
				</Switch>
			</Router>
		</div>
	);
}
