import React from "react";
import "../css/RegisterUser.css";
import dog1 from "../assets/images/dog1.png"

export default function RegisterUser() {
	return (
		<div id="register-section">	
		<div id="user-form">
				<h1 className="login-header">Sign Up to Start Parking</h1>
				<img id="dog1-icon" src={dog1} alt="dog" />
				<form action="http://localhost:3001/api/users/adduser" method="POST">
					<input
						name="first_name"
						id="top-input"
						type="text"
						placeholder="First Name"
					/>
					<input 
						name="last_name"
						id="register-input"
						type="text"
						placeholder="Last Name" />
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
					<input name="license_plate" id="register-input" type="text" placeholder="License Plate Number" />
					<input name="phone" id="bottom-input" type="text" placeholder="Phone Number" />
					<input name="access" value="driver" type="hidden"/>
					<button className="register-button" id="submit-button">Submit Form</button>
				</form>
				</div>
				</div>
	);
}
