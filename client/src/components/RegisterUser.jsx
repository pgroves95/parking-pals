import React from "react";
import "../css/RegisterUser.css";
import dog1 from "../assets/images/dog1.png"

export default function RegisterUser() {
	return (
		<div id="register-section">	
		<div id="user-form">
				<h1 className="login-header">Sign Up to Start Parking</h1>
				<img id="dog1-icon" src={dog1} alt="dog" />
				<form action="/register" method="POST">
					<input
						name="firstName"
						id="top-input"
						type="text"
						placeholder="First Name"
					/>
					<input name="lastName" id="register-input" type="text" placeholder="Last Name" />
					<input
						name="email"
						id="register-input"
						type="email"
						placeholder="Email Address"
					/>
					<input
						name="password"
						id="register-input"
						type="password"
						placeholder="Password"
					/>
					<input
						id="register-input"
						type="password"
						placeholder="Confirm Password"
					/>
					<input
						name="street"
						id="register-input"
						type="text"
						placeholder="Street Address"
					/>
					<input
						name="apt"
						id="register-input"
						type="text"
						placeholder="Apt/Suite #"
					/>
					<input name="city" id="register-input" type="text" placeholder="City" />
					<input name="state" id="register-input" type="text" placeholder="State" />
					<input name="zip" id="register-input" type="text" placeholder="Zip Code" />
					<input name="license_plate" id="register-input" type="text" placeholder="License Plate Number" />
					<input name="phone" id="bottom-input" type="text" placeholder="Phone Number" />
					<input name="access" value="user" type="hidden"/>
					<button className="register-button" id="submit-button">Submit Form</button>
				</form>
				</div>
				</div>
	);
}
