import React from "react";
import Hero from "./Hero";
import CoreValues from "./CoreValues";
import GetStarted from "./GetStarted";
import DesignLanguage from "./DesignLanguage";
import Resources from "./Resources";

const LandingPage:React.FC = () => {
	return (
		<div>
			<Hero />
			<CoreValues />
			<GetStarted />
			<DesignLanguage />
			<Resources />
		</div>
	);
};

export default LandingPage;
