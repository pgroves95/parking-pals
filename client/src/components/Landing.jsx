import React from "react";
import passengerdog from "../assets/images/passengerdog.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import phoneMap from "../assets/images/phoneMap.jpg";
import maps from "../assets/images/maps.jpg";
import {
	faCar,
	faClock,
	faDirections,
	faStar,
	faCreditCard,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import "../css/Landing.css";
import "../css/Navbar.css";

const car = <FontAwesomeIcon icon={faCar} size="2x" />;
const clock = <FontAwesomeIcon icon={faClock} size="2x" />;
const directions = <FontAwesomeIcon icon={faDirections} size="2x" />;
const star = <FontAwesomeIcon icon={faStar} size="2x" />;
const creditCard = <FontAwesomeIcon icon={faCreditCard} size="2x" />;
const users = <FontAwesomeIcon icon={faUsers} size="2x" />;

export default function Landing() {

	return (
		<div>
			<div id="main-landing">
				<br />
				<img src={passengerdog} alt="dog-passenger" />
				<div id="secondary-landing">
					<h3>
						Locate a hosted driveway spot on the go or put your unused driveway
						space to use!
					</h3>
					<div className="search-bar">
						<input
							id="landing-search-input"
							type="search"
							placeholder="Input your destination for nearby driveway parking"
							onChange={() => {}}
						/>
						<button id="main-search-button" onClick={() => {}}>
							Search
						</button>
					</div>
					<Link id="become-a-host" to="/RegisterHost">
						<h3>Become a host and join other active hosts!</h3>
					</Link>
					<p>
						Perfect for those close to popular areas where parking is becoming
						increasingly difficult to find. Whether it's during concerts, a
						night out, sporting events or more! Book immediately or ahead of
						time.
					</p>
				</div>
			</div>
			<div className="features-div">
				<h1 id="features-title">Features</h1>
				<div className="features-section">
					<div>
						<div className="main-features">
							<div className="features-icon-reverse">{car}</div>
							<div className="features-info">
								<h1>Quick and Easy Parking</h1>
								<p>Book ahead or while you're on your way</p>
							</div>
							<div className="features-icon">{car}</div>
						</div>
						<div className="main-features">
							<div className="features-icon-reverse">{clock}</div>
							<div className="features-info">
								<h1>Park on your time</h1>
								<p>Select how long you need it for and it's all yours</p>
							</div>
							<div className="features-icon">{clock}</div>
						</div>
						<div className="main-features">
							<div className="features-icon-reverse">{directions}</div>
							<div className="features-info">
								<h1>Navigate to your spot</h1>
								<p>Once selected you will be directed to your reserved spot</p>
							</div>
							<div className="features-icon">{directions}</div>
						</div>
					</div>
					<div>
						<img id="map-img" src={maps} alt="phone maps" />
					</div>
					<div>
						<div className="main-features-reverse">
							<div className="features-icon-right">{star}</div>
							<div className="features-info">
								<h1>Rate and Review</h1>
								<p>Review driveway ratings and rate after parking</p>
							</div>
						</div>
						<div className="main-features-reverse">
							<div className="features-icon-right">{creditCard}</div>
							<div className="features-info">
								<h1>Pay by card</h1>
								<p>
									Create an account and store your card information for easy use
								</p>
							</div>
						</div>
						<div className="main-features-reverse">
							<div className="features-icon-right">{users}</div>
							<div className="features-info">
								<h1>Parking Pal support</h1>
								<p>Let us know if you have any questions or feedback</p>
							</div>
						</div>
					</div>
					<img id="phone-map" src={phoneMap} alt="maps" />
				</div>
			</div>
			<Footer />
		</div>
	);
}
