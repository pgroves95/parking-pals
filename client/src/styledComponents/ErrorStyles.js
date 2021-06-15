import styled from "styled-components";
import error from "../assets/images/error.jpg";

export const ErrorDiv = styled.div`
	height: 85vh;
	background-image: url(${error});
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ErrorSection = styled.div`
	background-color: #e8eef1;
	width: 300px;
	height: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	border-radius: 10px;

	h3 {
		font-size: 20px;
		padding: 10px;
		margin: 10px;
	}

	button {
		padding: 10px;
		margin: 10px;
	}
`;
