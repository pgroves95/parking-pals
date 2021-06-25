import React from "react";
import "../css/FAQ.css";

export default function FAQ() {
	return (
		<div>
			<div id="main-faq-div">
				<h1 className="faq-header">Frequently Asked Questions</h1>
				<div className="faq-section">
					<div className="faq-sub-section">
						<h3>How do I use Parking Puppy?</h3>
						<p>
							Input your destination on the homepage to find open driveways near
							the designated location. Log in or register an account to book
							that parking spot for an allotted time.
						</p>
					</div>
					<div className="faq-sub-section">
						<h3>Where is the home menu located?</h3>
						<p>
							The home menu button is the Parking Puppy icon in the top left of
							the screen. On a mobile device, click the orange paw in the top
							right to navigate between other pages.
						</p>
					</div>
					<div className="faq-sub-section">
						<h3>How do I view my reservation history?</h3>
						<p>
							Reservation history is located on your profile page once you
							register an account.
						</p>
					</div>
					<div className="faq-sub-section">
						<h3>Can I park multiple cars?</h3>
						<p>
							You may only register one car per account. If you have reserved a
							driveway spot and there is another opening, the other spot can be
							reserved from the second car account.
						</p>
					</div>
					<div className="faq-sub-section">
						<h3>How do I find my parking spot?</h3>
						<p>
							Driveway addresses can be found when making your reservation or
							afterwards on your profile page.
						</p>
					</div>
					<div className="faq-sub-section">
						<h3>Can I end my parking session while it’s in progress?</h3>
						<p>
							The reservation will end once the selected stay has come to an
							end, so there’s no need to stop it early.
						</p>
					</div>
					<div className="faq-sub-section">
						<h3>How do I enter my license plate number?</h3>
						<p>
							Enter your license plate alphanumeric only, no special characters.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
