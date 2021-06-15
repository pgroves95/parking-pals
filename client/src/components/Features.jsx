import React from "react";
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

const car = <FontAwesomeIcon icon={faCar} size="2x" />;
const clock = <FontAwesomeIcon icon={faClock} size="2x" />;
const directions = <FontAwesomeIcon icon={faDirections} size="2x" />;
const star = <FontAwesomeIcon icon={faStar} size="2x" />;
const creditCard = <FontAwesomeIcon icon={faCreditCard} size="2x" />;
const users = <FontAwesomeIcon icon={faUsers} size="2x" />;

export default function Features() {
	return (
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
	);
}
