import { Value } from "./style";

interface Props {
	value: string;
}

export default function Password({ value }: Props) {

	return (
		<Value>{value}</Value>
	)
}
