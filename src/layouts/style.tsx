import styled from 'styled-components';

export const Main = styled.main`
  grid-area: 'main';
  border: 1px solid gray;
  border-radius: 14px;
`;

export const Footer = styled.footer`
  grid-area: 'footer';
  border: 1px solid gray;
  border-radius: 14px;
  text-align: center;
`;

export const Header = styled.header`
  grid-area: 'header';
  border: 1px solid gray;
  border-radius: 14px;
  text-align: center;
  margin-top: 0.5rem;
`;

export const Container = styled.header`
	display: grid;
	gap: 0.5rem;
	grid-template-areas: 
	'header'
	'main'
	'footer'
	;
`;
