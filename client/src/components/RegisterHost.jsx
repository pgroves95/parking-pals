import React from "react";
import "../css/RegisterHost.css";
import bone from "../assets/images/bone.png";

export default function RegisterHost() {
	return (
		<div id="register-section">
				<div className="form">
				<form id="host-form" action="/register" method="POST">
				<h1 className="host-header">Register to Host Now</h1>
				<img id="bone-icon" src={bone} alt="bone" />

					<input
						name="firstName"
						id="top-input"
						type="text"
						placeholder="First Name"
					/>
					<input
						name="lastName"
						className="register-input"
						type="text"
						placeholder="Last Name"
					/>
					<input
						name="email"
						className="register-input"
						type="email"
						placeholder="Email Address"
					/>
					<input
						name="password"
						className="register-input"
						type="password"
						placeholder="Password"
					/>
					<input
						className="register-input"
						type="password"
						placeholder="Confirm Password"
					/>
					<input
						className="register-input"
						name="street"
						type="text"
						placeholder="Street Address"
					/>
					<input
						className="register-input"
						name="city"
						type="text"
						placeholder="City"
					/>
					<input
						name="state"
						className="register-input"
						type="text"
						placeholder="State"
					/>
					<input
						name="zip"
						className="register-input"
						type="text"
						placeholder="Zip Code"
					/>

					<input name="phone" 
					id="bottom-input" type="text" placeholder="Phone Number" />

					<input name="access" value="host" type="hidden"/>


					<button id="submit-host" type="submit">
						Submit Form
					</button>
				</form>
				</div>
			</div>
	);
}
