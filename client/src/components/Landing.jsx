import React from "react";
import { LandingSection } from "../styledComponents/HomeStyles";
import driveway from "../assets/images/driveway.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { dataFromSupabase } from "../actions/supaBaseData";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA } from "../action-types/supaBase-action-types";
import { SecondaryNavbar } from "../styledComponents/NavbarStyles";
import {
	MainButtonDiv,
	LandingSubSection,
} from "../styledComponents/HomeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faCar } from "@fortawesome/free-solid-svg-icons";

const compass = <FontAwesomeIcon icon={faCompass} size="3x" />;
const car = <FontAwesomeIcon icon={faCar} size="3x" />;

export default function Landing() {
	const dispatch = useDispatch();
	const supaBaseHostData = useSelector((state) => state.supaBaseHostData);

	useEffect(() => {
		const fetchData = async () => {
			const data = await dataFromSupabase();
			dispatch({
				type: GET_DATA,
				payload: data,
			});
		};
		fetchData();
	}, [dispatch]);
	return (
		<div>
			<LandingSection>
				<img src={driveway} alt="driveway" />
				<LandingSubSection>
					<h3>
						Locate a hosted driveway spot on the go or put your unused driveway
						space to use!
					</h3>
					<SecondaryNavbar>
						<Link to="/LocateParking">
							<MainButtonDiv>
								<h2>{compass}</h2>
								<h3>Find Parking</h3>
							</MainButtonDiv>
						</Link>
						<Link to="/RegisterHost">
							<MainButtonDiv>
								<h2>{car}</h2>
								<h3>Host Driveway</h3>
							</MainButtonDiv>
						</Link>
					</SecondaryNavbar>
					<h3>
						Become a host and join {supaBaseHostData.length} other active hosts!
					</h3>

					<p>
						Perfect for those close to popular areas where parking is becoming
						increasingly difficult to find. Whether it's during concerts, a
						night out, sporting events or more! Book immediately or ahead of
						time.
					</p>
				</LandingSubSection>
			</LandingSection>
		</div>
	);
}
