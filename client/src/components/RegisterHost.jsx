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
				<HostForm>
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
						id="spots"
						type="number"
						placeholder="Number of Parking Spots"
					/>
					<SignUpFormInput
						id="street"
						type="text"
						placeholder="Street Address"
					/>
					<SignUpFormInput
						id="apt-suite"
						type="text"
						placeholder="Apt/Suite #"
					/>
					<SignUpFormInput id="city" type="text" placeholder="City" />
					<SignUpFormInput id="state" type="text" placeholder="State" />
					<SignUpFormInput id="zip" type="text" placeholder="Zip Code" />
					<SignUpButton id="submit-button">Submit Form</SignUpButton>
				</HostForm>
			</div>
		</RegisterDiv>
	);
}
