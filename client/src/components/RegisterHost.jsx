import React from "react";
import "../App.css";
import "../css/RegisterHost.css";

export default function RegisterHost() {
	return (
		<div id="register-section">
			<div className="host-wrapper">
				<h1>Register to Host Now</h1>

				<form id="register-host-form" action="/register" method="POST">
					<input
						name="firstName"
						class="register-input"
						id="first-name"
						type="text"
						placeholder="First Name"
					/>
					<input
						name="lastName"
						class="register-input"
						id="last-name"
						type="text"
						placeholder="Last Name"
					/>
					<input
						name="email"
						class="register-input"
						id="email"
						type="email"
						placeholder="Email Address"
					/>
					<input
						class="register-input"
						name="street"
						id="street"
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
						id="state"
						type="text"
						placeholder="State"
					/>
					<input
						name="zip"
						class="register-input"
						id="zip"
						type="text"
						placeholder="Zip Code"
					/>
					<input
						class="register-input"
    					name="rate"
						type="number"
						placeholder="Hourly Parking Rate"
					/>
					<input
						class="register-input"
    					name="title"
						type="text"
						placeholder="Listing Title"
					/>
					<input
						class="register-input"			
						id="description"
    					name="description"
						type="textarea"
						placeholder="Driveway Description"
					/>
					<input name="access" value="host" type="hidden"/>
					<button class="register-button" type="submit" id="submit-button">
						Submit Form
					</button>
				</form>
			</div>
		</div>
	);
}
