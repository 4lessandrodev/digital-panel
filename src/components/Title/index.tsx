import { Head } from "./style";

interface Props {
	value: string;
}

export default function Title({ value }: Props) {
	return (
		<Head>{value}</Head>
	)
}
