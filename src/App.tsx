import React from "react";
import Hero from "./components/Hero";
import CompA from "./components/CompA";

const App: React.FC = () => {
	return (
		<div>
			<div>Landing page</div>
			<Hero />
			<CompA />
		</div>
	);
};

export default App;
