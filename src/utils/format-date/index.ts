export default function FormatDate(date: Date): string {
	const formattedDate = date.toLocaleString('pt-BR');
	return formattedDate;
}
