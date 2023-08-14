import React from "react";
import { Global, css } from "@emotion/react";

const GlobalStyle: React.FC = () => {
	return (
		<div>
			<Global
				styles={css`
					@font-face {
						font-family: "CustomFont";
						src: url("../fonts/static/Raleway-Black.ttf");
						src: url("../fonts/static/Raleway-BlackItalic.ttf");
						src: url("../fonts/static/Raleway-Bold.ttf");
						src: url("../fonts/static/Raleway-BoldItalic.ttf");
						src: url("../fonts/static/Raleway-ExtraBold.ttf");
						src: url("../fonts/static/Raleway-Light.ttf");
						src: url("../fonts/static/Raleway-SemiBold.ttf");
						src: url("../fonts/static/Raleway-Regular.ttf");
					}

					body {
						font-family: CustomFont;
						background-color: #fafbff;
						min-height: 100vh;
						margin : 0
					}
				`}
			/>
		</div>
	);
};

export default GlobalStyle;
