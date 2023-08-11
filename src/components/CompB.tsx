import React from "react";
import CompC from "./CompC";

interface Iprops {
	Uname: string;
}

const CompB: React.FC<Iprops> = ({ Uname }) => {
    const Uemail = "IkeContainer@yahoo.com"
	return (
		<div style={{ display: "flex" }}>
			<div>
				<input />
			</div>
			<CompC Uname={Uname} Uemail = {Uemail} />
		</div>
	);
};

export default CompB;
