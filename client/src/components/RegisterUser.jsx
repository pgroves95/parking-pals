import React from "react";
import {
	HostForm,
	SignUpButton,
	SignUpFormInput,
	RegisterDiv,
} from "../styledComponents/SignUpFormStyles";
import "../App.css";

export default function RegisterUser() {
	return (
		<RegisterDiv>
			<div className="host-wrapper">
				<h1>Sign Up to Start Parking</h1>
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
					<SignUpFormInput type="text" placeholder="License Plate Number" />
					<SignUpButton id="submit-button">Submit Form</SignUpButton>
				</HostForm>
			</div>
		</RegisterDiv>
	);
}
