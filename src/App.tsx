import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";

const App: React.FC = () => {
	return (
		<div>
			<GlobalStyle />
			<Header />
			<LandingPage />
			<Footer />
		</div>
	);
};

export default App;
