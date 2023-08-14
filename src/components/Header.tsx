import React from "react";
import styled from "@emotion/styled";
import { AiFillGithub } from "react-icons/ai";

const Container = styled.header`
	height: 70px;
	width: 100%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;
const Logo = styled.div`
	margin-right: 60px;
	margin-left: 30px;
`;
const Navigation = styled.div`
	display: flex;
	align-items: center;
`;
const Nav = styled.nav`
	margin-right: 25px;
	font-size: 15px;
	color: rgba(0, 0, 0, 0.7);
	transition: all 350ms;
	cursor: pointer;

	:hover {
		color: black;
	}
`;
const GitHub = styled.div`
	margin-right: 30px;
	display: flex;
`;
const Hold = styled.div`
	display: flex;
	padding: 5px;
	border-radius: 3px;
	background-color: #bebebe;
	font-size: 13px;
`;
const Icon = styled.div`
	font-size: 15px;
`;
const Text = styled.div``;

const Header: React.FC = () => {
	return (
		<Container>
			<Wrapper>
				<Logo>Logo</Logo>
				<Navigation>
					<Nav>Introductions</Nav>
					<Nav>foundations</Nav>
					<Nav>Components</Nav>
					<Nav>patterns</Nav>
					<Nav>Resources</Nav>
				</Navigation>
			</Wrapper>
			<GitHub>
				<Hold>
					<Icon>
						<AiFillGithub />
					</Icon>
					<Text>Text</Text>
				</Hold>
			</GitHub>
		</Container>
	);
};

export default Header;
