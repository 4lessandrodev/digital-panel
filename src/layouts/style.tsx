import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: 'main';
  border: 1px solid gray;
  border-radius: 14px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: 'footer';
  border: 1px solid gray;
  border-radius: 14px;
  text-align: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: 'header';
  border: 1px solid gray;
  border-radius: 14px;
  text-align: center;
  margin-top: 0.5rem;
`;

export const Container = styled.section`
	display: grid;
	gap: 0.5rem;
  height: 98vh;
	grid-template-areas: 
	'header'
	'main'
	'footer'
	;
`;
