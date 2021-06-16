import React from "react";
import "../css/RegisterUser.css";

export default function RegisterUser() {
	return (
		<div id="register-section">
			<div className="host-wrapper">
				<h1>Sign Up to Start Parking</h1>
				<div className="form">
				<form action="/register" method="POST">
					<input
						name="firstName"
						id="first-name"
						type="text"
						placeholder="First Name"
					/>
					<input name="lastName" id="last-name" type="text" placeholder="Last Name" />
					<input
						name="email"
						id="email"
						type="email"
						placeholder="Email Address"
					/>
					<input
						name="password"
						id="password"
						type="password"
						placeholder="Password"
					/>
					<input
						id="password2"
						type="password"
						placeholder="Confirm Password"
					/>
					<input
						name="street"
						id="street"
						type="text"
						placeholder="Street Address"
					/>
					<input
						name="apt"
						id="apt-suite"
						type="text"
						placeholder="Apt/Suite #"
					/>
					<input name="city" id="city" type="text" placeholder="City" />
					<input name="state" id="state" type="text" placeholder="State" />
					<input name="zip" id="zip" type="text" placeholder="Zip Code" />
					<input name="license_plate" type="text" placeholder="License Plate Number" />
					<input name="phone" id="phone" type="text" placeholder="Phone Number" />
					<input name="access" value="user" type="hidden"/>
					<button className="register-button" id="submit-button">Submit Form</button>
				</form>
				</div>
			</div>
		</div>
	);
}
