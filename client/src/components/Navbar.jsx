import React from "react";
import { Link } from "react-router-dom";
import {
	MainNavbar,
	NavbarLinks,
	StyledLink,
} from "../styledComponents/NavbarStyles";

export default function Navbar() {
	return (
		<MainNavbar>
			<StyledLink to="/">Parking Pal</StyledLink>
			<NavbarLinks>
				<Link to="/">Home</Link>
				<Link to="/Features">Features</Link>
				<Link to="/RegisterHost">Host</Link>
			</NavbarLinks>
		</MainNavbar>
	);
}
