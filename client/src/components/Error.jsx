import React from "react";
import { ErrorDiv, ErrorSection } from "../styledComponents/ErrorStyles";
import { SignUpButton } from "../styledComponents/SignUpFormStyles";
import { Link } from "react-router-dom";

export default function Error() {
	return (
		<div>
			<ErrorDiv>
				<ErrorSection>
					<h3>Error 404 - Not Found</h3>
					<h3>Woah, I think a wrong turn was made!</h3>
					<Link to="/">
						<SignUpButton>Return Home</SignUpButton>
					</Link>
				</ErrorSection>
			</ErrorDiv>
		</div>
	);
}
