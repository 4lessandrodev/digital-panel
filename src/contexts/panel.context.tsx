
import { createContext, useContext } from "react";
import Panel from "../domain/panel.model";

export interface PanelInterface {
	panel: Panel;
	setPanel: (panel: Panel) => void;
	dateTimeCalled: string;
}

const PanelContext = createContext<PanelInterface>({
	panel: {} as Panel,
	setPanel: (_panel: Panel) => { },
	dateTimeCalled: ''
});

export function usePanel(): PanelInterface {
	return useContext(PanelContext);
}

export default PanelContext;
