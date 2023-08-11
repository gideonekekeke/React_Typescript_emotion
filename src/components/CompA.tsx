import React from "react";
import CompB from "./CompB";

const CompA = () => {
	const Uname = "Ikechukwu";
	return (
		<div>
			<div>Comp A</div>
			<CompB Uname={Uname} />
		</div>
	);
};

export default CompA;
