import React from "react";
import "../css/RegisterDriveway.css"

export default function RegisterDriveway() {
	return (
		<div id="register-section">
				<div className="form">
				<h1 className="login-header">Register Your Driveway</h1>
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
					<button className="register-button" type="submit" id="submit-button">
						Submit Form
					</button>
				</form>
				</div>
			</div>
	);
}
