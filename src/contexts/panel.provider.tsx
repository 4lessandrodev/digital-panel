import { ReactComponentElement, useEffect, useMemo, useState } from "react";
import Panel from "../domain/panel.model";
import FormatDate from "../utils/format-date";
import AuthContext, { PanelInterface } from "./panel.context";

interface Props {
	children: ReactComponentElement<any> | ReactComponentElement<any>[]
}

export default function PanelProvider({ children }: Props) {
	const [panel, setPanel] = useState<Panel>(Panel.start());
	const [dateTimeCalled, setCalledTime] = useState<string>('');

	useEffect(() => {
		setCalledTime(FormatDate(new Date()));
	}, [dateTimeCalled]);

	useEffect(() => {
		const lastPass = window.localStorage.getItem("digital-panel@last-password");
		if (lastPass) setPanel(p => p.setPassword(lastPass));
	}, []);

	const context = useMemo((): PanelInterface => ({
		panel,
		setPanel: (panel: Panel) => {
			window.localStorage.setItem('digital-panel@last-password', panel.getPassword());
			setCalledTime(FormatDate(new Date()));
			setPanel(panel);
		},
		dateTimeCalled
	}), [panel, dateTimeCalled])

	return (
		<AuthContext.Provider value={context}>
			{children}
		</AuthContext.Provider>
	)
}
