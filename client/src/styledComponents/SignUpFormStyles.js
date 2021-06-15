import styled from "styled-components";
import driving from "../assets/images/driving.jpg";

export const RegisterDiv = styled.div`
	h1 {
		margin-bottom: 2rem;
	}

	@media (min-width: 768px) {
		background-image: url(${driving});
		background-size: cover;
		background-position: center;
		height: 100vh;
	}
`;

export const HostForm = styled.form`
	display: grid;
	place-items: center;
	justify-content: center;

	input {
		outline: none;
		width: 200px;
	}

	h1 {
		margin: 2rem;
	}

	h3 {
		margin: 1rem;
	}
	@media (min-width: 768px) {
		display: inline-grid;
		width: 500px;
		height: 450px;
		place-items: center;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5px;
		border: 1px solid #1e3d58;
		border-radius: 5px;
		padding: 20px;
		margin-bottom: 50px;
		background-color: #057dcd70;

		input {
			width: 200px;
		}
	}
`;

export const SignUpFormInput = styled.input`
	height: 2.2rem;
	width: 9rem;
	border-radius: 3px;
	padding-left: 20px;
	margin-bottom: 1rem;
	outline: none;
`;

export const SignUpButton = styled.button`
	background-color: #1e3d58;
	width: 160px;
	height: 40px;
	color: #e8eef1;
	font-family: sans-serif;
	font-size: 1.1rem;
	border-radius: 3px;
	border: 0;
	cursor: pointer;

	&:hover {
		background-color: #fd7f20;
		border: 1px solid #1e3d58;
		color: #1e3d58;
	}
`;
