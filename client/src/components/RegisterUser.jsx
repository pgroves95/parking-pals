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
				<HostForm action="/register" method="POST">
					<SignUpFormInput
						name="name"
						id="first-name"
						type="text"
						placeholder="First Name"
					/>
					<SignUpFormInput id="last-name" type="text" placeholder="Last Name" />
					<SignUpFormInput
						name="email"
						id="email"
						type="email"
						placeholder="Email Address"
					/>
					<SignUpFormInput
						id="email2"
						type="email"
						placeholder="Confirm Email Address"
					/>
					<SignUpFormInput
					name="password"
						id="password"
						type="password"
						placeholder="Password"
					/>
					<SignUpFormInput
						id="password2"
						type="password"
						placeholder="Confirm Password"
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
					<SignUpFormInput name="license_plate" type="text" placeholder="License Plate Number" />
					<SignUpFormInput name="phone" id="phone" type="text" placeholder="Phone Number" />
					<input name="access" value="user" type="hidden"/>
					<SignUpButton id="submit-button">Submit Form</SignUpButton>
				</HostForm>
			</div>
		</RegisterDiv>
	);
}
