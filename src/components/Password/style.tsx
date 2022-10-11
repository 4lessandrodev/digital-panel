import styled from "styled-components";

export const Value = styled.p`
	font-size: 320px;
	color: red;
	margin: 0;
	font-family: digital;

	@media screen and (max-width: 540px){
		font-size: 240px;
	}

	@media screen and (min-width: 1240px){
		font-size: 380px;
	}

	@media screen and (min-width: 1420px){
		font-size: 420px;
	}
`;
