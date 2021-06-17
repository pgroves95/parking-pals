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
						name="driveway-name"
						id="top-input"
						type="text"
						placeholder="Driveway Title"
					/>
					<input
						name="parking-spots"
						id="register-input"
						type="number"
						placeholder="Number of Parking Spots"
					/>
					<input
						name="rate"
						id="register-input"
						type="number"
						placeholder="Rate"
					/>
					<input
						id="register-input"
						name="address"
						type="text"
						placeholder="Street Address"
					/>
					<input
						id="register-input"
						name="city"
						type="text"
						placeholder="City"
					/>
					<input
						name="state"
						id="register-input"
						type="text"
						placeholder="State"
					/>
					<input
						id="register-input"
						type="text"
						placeholder="Zip Code"
						name="zip"
					/>
					<input
						id="bottom-input"
						name="description"
						type="textarea"
						placeholder="Driveway Description"
					/>
					<input name="access" value="host" type="hidden" />
					<button id="register-button" type="submit">
						Submit Form
					</button>
				</form>
				</div>
			</div>
	);
}
