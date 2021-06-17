import React from "react";
import "../css/RegisterHost.css";

export default function RegisterHost() {
	return (
		<div id="register-section">
			<div className="host-wrapper">
				<h1>Register to Host Now</h1>
				<div className="form">
				<form action="/register" method="POST">

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
						name="password"
						class="register-input"
						id="password"
						type="password"
						placeholder="Password"
					/>
					<input
						id="password2"
						class="register-input"
						type="password"
						placeholder="Confirm Password"
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

					<input name="phone" 
					class="register-input"id="phone" type="text" placeholder="Phone Number" />

					<input name="access" value="host" type="hidden"/>


					<button class="register-button" type="submit" id="submit-button">
						Submit Form
					</button>
				</form>
				</div>
			</div>
		</div>
	);
}
