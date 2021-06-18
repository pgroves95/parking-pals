import React from "react";
import "../css/RegisterDriveway.css"
import paw from "../assets/images/paw.png"

export default function RegisterDriveway() {
	return (
		<div id="register-section">
				<div id="driveway-form">
				<h1 className="login-header">Register Your Driveway</h1>
				<img id="paw-icon" src={paw} alt="paw" />
				<form action="/driveway" method="POST">
					<input
						id="top-input"
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
						className="register-input"
						type="text"
						placeholder="Zip Code"
						name="zip"
					/>
					<input
						name="total_spaces"
						className="register-input"
						type="number"
						placeholder="Number of Parking Spots"
					/>
					<input
						name="rate"
						className="register-input"
						type="number"
						placeholder="Rate"
					/>
					<input
						id="bottom-input"
						name="description"
						type="textarea"
						placeholder="Driveway Description"
					/>
					<button id="register-button" type="submit">
						Submit Form
					</button>
				</form>
				</div>
			</div>
	);
}
