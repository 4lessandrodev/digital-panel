import { usePanel } from "../../contexts/panel.context";
import { Text } from "./style";

export default function CurrentDate() {
	const { dateTimeCalled } = usePanel();

	return (
		<Text>{dateTimeCalled}</Text>
	)
}
