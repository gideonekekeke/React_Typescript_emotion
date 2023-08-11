import React from "react";
import styled from "@emotion/styled";

interface Iprops {
	title: string;
	bg: string;
	width: string;
}

const But = styled.button<{ bg: string; wd: string }>`
	background-color: ${(props) => props.bg};
	color: white;
	width: ${(props) => props.wd};
`;

const Para = styled.p`
	font-size: 30px;
`;

const Button: React.FC<Iprops> = ({ title, bg, width }) => {
	return (
		<div>
			<But wd={width} bg={bg}>
				{title}
			</But>
			<Para>lorem button</Para>
		</div>
	);
};

export default Button;
