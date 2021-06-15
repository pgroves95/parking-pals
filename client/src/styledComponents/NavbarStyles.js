import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainNavbar = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
		height: 5rem;
	}
`;

export const StyledLink = styled(Link)`
	text-transform: uppercase;
	text-decoration: none;
	color: #e8eef1;
	font-size: 2rem;
	background-color: #1e3d58;
	align-items: center;
	padding: 1.2rem;
	display: flex;
	justify-content: center;
	width: 100%;

	@media (min-width: 992px) {
		justify-content: flex-start;
		padding-left: 50px;
	}
`;

export const NavbarLinks = styled.nav`
	display: flex;
	flex-direction: column;
	margin: 0.3rem;
	padding: 1rem;
	border-bottom: 1px solid #1e3d58;

	a {
		text-decoration: none;
		color: #1e3d58;
		font-size: 1.5rem;
		margin: 1.2rem;
		cursor: pointer;

		&:hover {
			color: #fd7f20;
		}

		@media (min-width: 768px) {
			color: #e8eef1;
			padding-left: 2.5rem;
		}
	}
	@media (min-width: 768px) {
		flex-direction: row;
		background-color: #1e3d58;
		margin: 0;
		width: 100%;
		justify-content: flex-end;
		align-items: center;
		height: 5rem;
	}
`;

export const SecondaryNavbar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 10px;

	a {
		margin: 5px;
		text-decoration: none;
		color: #057dcd;
		border: 1px solid #43b0f1;
		border-radius: 30px;
		padding: 10px;

		&:hover {
			border: 1px solid #fd7f20;
		}

		@media (min-width: 992px) {
			border: none;
			&:hover {
				border: none;
			}
		}
	}
`;

export const FooterDiv = styled.div`
	background-color: #1e3d58;
	color: #e8eef1;
	margin-top: 1rem;
	padding: 1rem;

	@media (min-width: 992px) {
		margin: 0;
	}
`;
