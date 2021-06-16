import React from "react";

export default function RegisterDriveway() {
	return (
		<div id="register-section">
			<div className="host-wrapper">
				<h1>Register your Driveway</h1>
				<form id="register-host-form" action="/driveway" method="POST">
					<input
						name="driveway-name"
						class="register-input"
						type="text"
						placeholder="Driveway Title"
					/>
					<input
						name="parking-spots"
						class="register-input"
						type="number"
						placeholder="Number of Parking Spots"
					/>
					<input
						name="rate"
						class="register-input"
						type="number"
						placeholder="Rate"
					/>
					<input
						class="register-input"
						name="address"
						type="text"
						placeholder="Street Address"
					/>
					<input
						class="register-input"
						name="city"
						id="city"
						type="text"
						placeholder="City"
					/>
					<input
						name="state"
						class="register-input"
						type="text"
						placeholder="State"
					/>
					<input
						class="register-input"
						type="text"
						placeholder="Zip Code"
						name="zip"
					/>
					<input
						class="register-input"
						name="description"
						type="textarea"
						placeholder="Driveway Description"
					/>
					<input name="access" value="host" type="hidden" />
					<button class="register-button" type="submit" id="submit-button">
						Submit Form
					</button>
				</form>
			</div>
		</div>
	);
}
