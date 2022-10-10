import { usePanel } from "../../contexts/panel.context";
import Password from "../Password";
import { Wrapper } from "./style";

export default function Content() {

	const { panel } = usePanel();

	return (
		<Wrapper>
			{panel.getPassword && (<Password value={panel.getPassword()} />)}
		</Wrapper>
	)
}
