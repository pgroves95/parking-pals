import styled from "styled-components";

export const FeaturesList = styled.div`
	display: flex;
	flex-direction: column;
	// background-color: green;
	min-height: 12rem;

	h1 {
		text-transform: uppercase;
	}

	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;
		height: 85vh;
	}
`;

export const MainFeatures = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	padding: 1.2rem;
	padding-right: 0.6rem;
	margin: 0.2rem 1.2rem;
	margin-right: 0.6rem;
	align-items: center;
	height: 8rem;
	text-align: right;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding: 1.2rem;
		padding-right: 0.6rem;
		margin: 0.2rem 1.2rem;
		margin-left: 0.6rem;
		align-items: center;
		height: 8rem;
		text-align: left;
	}

	@media (min-width: 992px) {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		padding: 1.2rem;
		padding-right: 0.6rem;
		margin: 0.2rem 1.2rem;
		margin-right: 0.6rem;
		align-items: center;
		height: 8rem;
		text-align: right;
	}
`;

export const FeatureInfo = styled.div`
	width: 70vw;
	height: 7rem;

	h1 {
		font-size: 20px;
		font-weight: bolder;
		margin: 5px;
	}
	p {
		font-size: 1.2rem;
	}
	@media (min-width: 768px) {
		width: 300px;
	}
`;

export const FeatureIcon = styled.div`
	display: flex;
	color: #fd7f20;
	height: 70px;
	width: 70px;
	border: 1px #fd7f20 solid;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	margin: 1rem 0rem 1.6rem 1rem;
	padding: 10px;

	@media (min-width: 768px) {
		display: none;
	}
	@media (min-width: 992px) {
		display: flex;
	}
`;

export const FeatureIconLeft = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		color: #fd7f20;
		height: 70px;
		width: 70px;
		border: 1px #fd7f20 solid;
		border-radius: 50%;
		align-items: center;
		justify-content: center;
		margin: 1rem 1rem 1.6rem 0rem;
		padding: 10px;
	}
	@media (min-width: 992px) {
		display: none;
	}
`;

export const MainFeaturesReverse = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding: 1.2rem;
	padding-right: 0.6rem;
	margin: 0.2rem 1.2rem;
	margin-left: 0.6rem;
	align-items: center;
	height: 8rem;
	text-align: left;
`;

export const FeatureIconReverse = styled.div`
	display: flex;
	color: #fd7f20;
	height: 70px;
	width: 70px;
	border: 1px #fd7f20 solid;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	margin: 1rem 1rem 1.6rem 0rem;
	padding: 10px;
`;

export const MapsIMG = styled.img`
	display: none;
	height: 200px;
	width: 200px;

	@media (min-width: 992px) {
		height: 500px;
		width: 420px;
		display: flex;
		border-radius: 5px;
	}
`;

export const PhoneMap = styled.img`
	@media (min-width: 992px) {
		display: none;
	}
`;
