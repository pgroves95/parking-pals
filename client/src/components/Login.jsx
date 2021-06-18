import React from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";
import "../css/RegisterHost.css";
import dog from "../assets/images/dog.png";

export default function Login() {
	return (
		<div>
			<div id="login-section">
				<form className="login-form" action="/login" method="GET">
					<h1 className="login-header">Log In to Find Parking</h1>
					<img id="dog-icon" src={dog} alt="dog" />
					<input className="login-input-1" type="email" placeholder="Email" />
					<input className="login-input-2" type="password" placeholder="Password" />
					<button className="login-button" type="submit">
						Log In
					</button>
					<Link className="register-link" to="/RegisterUser">
						<p>Not signed up? Click here to make an account!</p>
					</Link>
				</form>
			</div>
		</div>
	);
}
