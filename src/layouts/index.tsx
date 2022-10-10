import { ReactElement } from 'react';
import Content from '../components/Content';
import CurrentDate from '../components/CurrentDate';
import Title from '../components/Title';
import { Main, Footer, Header, Container } from './style';

interface Props {
	title: string;
	children?: ReactElement;
}

export default function Layout(props: Props) {
	return (
		<Container>
			<Header>
				<Title value={props.title} />
			</Header>
			<Main>
				<Content />
			</Main>
			<Footer>
				<CurrentDate />
			</Footer>
		</Container>
	)
}
