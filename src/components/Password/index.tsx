import { usePanel } from "../../contexts/panel.context";
import { Value } from "./style";


export default function Password() {

	const { panel } = usePanel();

	return (
		<Value>{panel.getPassword()}</Value>
	)
}
