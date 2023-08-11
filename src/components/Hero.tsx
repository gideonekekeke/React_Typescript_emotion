import { FC } from "react";
import Button from "./Button";

const Hero: FC = () => {
	return (
		<div>
			<Button title='Get Started' bg = "black" width = "200px"/>
			<Button width = "150px" title='Explore' bg = "red"  />
			<Button width = "100px" title='Register' bg = "green" />
			<Button width = "70px" title='Click Me' bg = "blue" />
		</div>
	);
};

export default Hero;
