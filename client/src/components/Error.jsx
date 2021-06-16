import React from "react";
import { Link } from "react-router-dom";
import "../css/Error.css";

export default function Error() {
	return (
		<div>
			<div id="main-error-div">
				<div id="error-section">
					<h3>Error 404 - Not Found</h3>
					<h3>Woah, I think a wrong turn was made!</h3>
					<Link to="/">
						<button>Return Home</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
