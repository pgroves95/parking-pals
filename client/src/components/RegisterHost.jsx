import React from "react";
import {
	HostForm,
	SignUpButton,
	SignUpFormInput,
	RegisterDiv,
} from "../styledComponents/SignUpFormStyles";
import "../App.css";

export default function RegisterHost() {
	return (
		<RegisterDiv>
			<div className="host-wrapper">
				<h1>Register to Host Now</h1>
				<HostForm action="/driveway" method="POST">
					<SignUpFormInput
						id="first-name"
						type="text"
						placeholder="First Name"
					/>
					<SignUpFormInput id="last-name" type="text" placeholder="Last Name" />
					<SignUpFormInput
						id="email"
						type="email"
						placeholder="Email Address"
					/>
					<SignUpFormInput
						name="total_spaces"
						id="spots"
						type="number"
						placeholder="Number of Parking Spots"
					/>
					<SignUpFormInput
						name="address"
						id="street"
						type="text"
						placeholder="Street Address"
					/>
					<SignUpFormInput name="city" id="city" type="text" placeholder="City" />
					<SignUpFormInput id="state" type="text" placeholder="State" />
					<SignUpFormInput id="zip" type="text" placeholder="Zip Code" />
					<SignUpFormInput name="rate" type="number" placeholder="Hourly Parking Rate" />
					<SignUpFormInput
					name="description"
						id="description"
						type="textarea"
						placeholder="Driveway Description"
					/>
					<input name="access" value="host" type="hidden"/>
					<SignUpButton type="submit" id="submit-button">Submit Form</SignUpButton>
				</HostForm>
			</div>
		</RegisterDiv>
	);
}
