import React, { useState } from "react";
import passengerdog from "../assets/images/passengerdog.jpg";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchCoordinates } from "../actions/search-actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dogRider from "../assets/images/dogrider.jpg";
import {
	faDog,
	faBone,
	faPaw,
	faDrumstickBite,
	faBaseballBall,
	faPoop,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Landing.css";
import "../css/Navbar.css";

const dog = <FontAwesomeIcon icon={faDog} size="2x" />;
const bone = <FontAwesomeIcon icon={faBone} size="2x" />;
const paw = <FontAwesomeIcon icon={faPaw} size="2x" />;
const drumstick = <FontAwesomeIcon icon={faDrumstickBite} size="2x" />;
const baseball = <FontAwesomeIcon icon={faBaseballBall} size="2x" />;
const poop = <FontAwesomeIcon icon={faPoop} size="2x" />;

export default function Landing() {
	const [search, setSearch] = useState("");
	const profileData = useSelector((state) => state.profileData);
	const history = useHistory();
	const dispatch = useDispatch();

	const getLocation = async () => {
		const response = await fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?&access_token=pk.eyJ1Ijoid3N2b2JvZGEiLCJhIjoiY2txMTE1cGl2MDVmZzJvcXVibjViMGliaCJ9.13cxlIO8hYUtM1rQuvlbBw`,
			{
				headers: { Accept: "application/json" },
			}
		);
		const json = await response.json();
		const coords = json.features[0].center;
		setSearchCoordinates(dispatch, coords);
		console.log(json);
		console.log(coords);
		history.push("/searchresults");
	};
	const submitLocation = (e) => {
		e.preventDefault();
		getLocation();
	};

	return (
		<div id="main">
			<div id="main-landing">
				<br />
				<img src={passengerdog} alt="dog-passenger" />
				<div id="secondary-landing">
					{profileData.id ? (
						<div>
							<h3 id="main-welcome-intro">
								Welcome to Parking Puppy, {profileData.first_name}!
							</h3>
						</div>
					) : (
						<div>
							<h3 id="main-welcome-intro">Welcome to Parking Puppy!</h3>
						</div>
					)}
					<form onSubmit={submitLocation} className="search-bar">
						<input
							id="landing-search-input"
							type="search"
							placeholder="Where are you going?"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							required
						/>
						<button id="main-search-button">Search</button>
					</form>
					{profileData.id ? (
						<div id="intro-details">
							<h3>Search for your destination and book a nearby driveway!</h3>
							<p>
								Perfect for those driving to popular areas where parking is
								becoming increasingly difficult to find. Whether it's during
								concerts, a night out, sporting events or more! Book ahead and
								secure your spot!
							</p>
						</div>
					) : (
						<div id="intro-details">
							<Link id="become-a-host" to="/registeruser">
								<h3>Click here to sign up and start parking!</h3>
							</Link>
							<p>
								Perfect for those driving to popular areas where parking is
								becoming increasingly difficult to find. Whether it's during
								concerts, a night out, sporting events or more! Book ahead and
								secure your spot!
							</p>
						</div>
					)}
				</div>
			</div>
			<div className="features-div">
				<h1 id="features-title">Parking Doesn't Have to Be Ruff!</h1>
				<div className="features-section">
					<div className="features-sub-section-1">
						<div className="main-features">
							<div className="features-icon-reverse">{dog}</div>
							<div className="features-info">
								<h1>Quick and Easy Parking</h1>
								<p>Book ahead or while you're on your way</p>
							</div>
							<div className="features-icon">{dog}</div>
						</div>
						<div className="main-features">
							<div className="features-icon-reverse">{bone}</div>
							<div className="features-info">
								<h1>Park on your time</h1>
								<p>Select how long you need it for and it's all yours</p>
							</div>
							<div className="features-icon">{bone}</div>
						</div>
						<div className="main-features">
							<div className="features-icon-reverse">{paw}</div>
							<div className="features-info">
								<h1>Navigate to your spot</h1>
								<p>Once selected you will be directed to your reserved spot</p>
							</div>
							<div className="features-icon">{paw}</div>
						</div>
					</div>
					<div id="dog-rider-div">
						<img id="dog-rider-img" src={dogRider} alt="dog rider" />
					</div>
					<div className="features-sub-section-2">
						<div className="main-features-reverse">
							<div className="features-icon-right">{drumstick}</div>
							<div className="features-info">
								<h1>Rate and Review</h1>
								<p>Review driveway ratings and rate after parking</p>
							</div>
						</div>
						<div className="main-features-reverse">
							<div className="features-icon-right">{baseball}</div>
							<div className="features-info">
								<h1>Pay by card</h1>
								<p>
									Create an account and store your card information for easy use
								</p>
							</div>
						</div>
						<div className="main-features-reverse">
							<div className="features-icon-right">{poop}</div>
							<div className="features-info">
								<h1>Parking Pal support</h1>
								<p>Let us know if you have any questions or feedback</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
