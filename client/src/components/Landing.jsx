import React from "react";
import { LandingSection } from "../styledComponents/HomeStyles";
import driveway from "../assets/images/driveway.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SecondaryNavbar } from "../styledComponents/NavbarStyles";
import {
	MainButtonDiv,
	LandingSubSection,
	LandingSearchInput,
} from "../styledComponents/HomeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	FeaturesList,
	MainFeatures,
	MainFeaturesReverse,
	FeatureInfo,
	FeatureIcon,
	FeatureIconReverse,
	FeatureIconLeft,
	MapsIMG,
	PhoneMap,
} from "../styledComponents/FeaturesStyles";
import phoneMap from "../assets/images/phoneMap.jpg";
import maps from "../assets/images/maps.jpg";
import {
	faCar,
	faClock,
	faDirections,
	faStar,
	faCreditCard,
	faUsers,
	faCompass,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Landing.css";

const compass = <FontAwesomeIcon icon={faCompass} size="3x" />;
const car1 = <FontAwesomeIcon icon={faCar} size="3x" />;
const car = <FontAwesomeIcon icon={faCar} size="2x" />;
const clock = <FontAwesomeIcon icon={faClock} size="2x" />;
const directions = <FontAwesomeIcon icon={faDirections} size="2x" />;
const star = <FontAwesomeIcon icon={faStar} size="2x" />;
const creditCard = <FontAwesomeIcon icon={faCreditCard} size="2x" />;
const users = <FontAwesomeIcon icon={faUsers} size="2x" />;

export default function Landing() {
	// const dispatch = useDispatch();

	const getDriveways = async () => {
		// pull from backend
	}

	return (
		<div>
			<div id="main-landing">
				<br />
				<img src={driveway} alt="driveway" />
				<LandingSubSection>
					<h3>
						Locate a hosted driveway spot on the go or put your unused driveway
						space to use!
					</h3>
					<div className="search-bar">
					<input
						id="landing-search-input"
						type="search"
						placeholder="Input your destination for nearby driveway parking"
					onChange={()=>{}}/>
					<button onClick={()=>{}}>Search</button>
					</div>
					<SecondaryNavbar>
						<Link to="/LocateParking">
							<div id="main-buttons-section">
								<h2>{compass}</h2>
								<h3>Find Parking</h3>
							</div>
						</Link>
						<Link to="/RegisterHost">
							<div id="main-buttons-section">
								<h2>{car1}</h2>
								<h3>Host Driveway</h3>
							</div>
						</Link>
					</SecondaryNavbar>
					<h3>Become a host and join other active hosts!</h3>

					<p>
						Perfect for those close to popular areas where parking is becoming
						increasingly difficult to find. Whether it's during concerts, a
						night out, sporting events or more! Book immediately or ahead of
						time.
					</p>
				</LandingSubSection>
			</div>
			<FeaturesList>
				<div>
					<MainFeatures>
						<FeatureIconLeft>{car}</FeatureIconLeft>
						<FeatureInfo>
							<h1>Quick and Easy Parking</h1>
							<p>Book ahead or while you're on your way</p>
						</FeatureInfo>
						<FeatureIcon>{car}</FeatureIcon>
					</MainFeatures>
					<MainFeatures>
						<FeatureIconLeft>{clock}</FeatureIconLeft>
						<FeatureInfo>
							<h1>Park on your time</h1>
							<p>Select how long you need it for and it's all yours</p>
						</FeatureInfo>
						<FeatureIcon>{clock}</FeatureIcon>
					</MainFeatures>
					<MainFeatures>
						<FeatureIconLeft>{directions}</FeatureIconLeft>
						<FeatureInfo>
							<h1>Navigate to your spot</h1>
							<p>Once selected you will be directed to your reserved spot</p>
						</FeatureInfo>
						<FeatureIcon>{directions}</FeatureIcon>
					</MainFeatures>
				</div>
				<div>
					<MapsIMG src={maps} alt="phone maps" />
				</div>
				<div>
					<MainFeaturesReverse>
						<FeatureIconReverse>{star}</FeatureIconReverse>
						<FeatureInfo>
							<h1>Rate and Review</h1>
							<p>Review driveway ratings and rate after parking</p>
						</FeatureInfo>
					</MainFeaturesReverse>
					<MainFeaturesReverse>
						<FeatureIconReverse>{creditCard}</FeatureIconReverse>
						<FeatureInfo>
							<h1>Pay by card</h1>
							<p>
								Create an account and store your card information for easy use
							</p>
						</FeatureInfo>
					</MainFeaturesReverse>
					<MainFeaturesReverse>
						<FeatureIconReverse>{users}</FeatureIconReverse>
						<FeatureInfo>
							<h1>Parking Pal support</h1>
							<p>Let us know if you have any questions or feedback</p>
						</FeatureInfo>
					</MainFeaturesReverse>
				</div>
				<PhoneMap src={phoneMap} alt="maps" />
			</FeaturesList>
		</div>
	);
}
