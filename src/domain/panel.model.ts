export class Panel {


	private readonly password: string;

	private constructor(
		password: string
	) {
		this.password = password;
	}

	getPassword(): string {
		return this.password;
	}

	public static start(pass?: string): Panel {
		return new Panel(pass ?? '000');
	}

	setPassword(pass: string): Panel {
		return new Panel(pass);
	}

	next(): Panel {
		const next = this.getNextPass();
		const nextFormatted = this.formatPass(next);
		return new Panel(nextFormatted);
	}

	prev(): Panel {
		const prev = this.getPrevPass();
		const prevFormatted = this.formatPass(prev);
		return new Panel(prevFormatted);
	}

	private getNextPass(): number {
		const current = parseInt(this.password, 10);
		const next = current + 1;
		if (next >= 1000) return 0;
		return next;
	}

	private getPrevPass(): number {
		const current = parseInt(this.password, 10);
		if (current < 1) return 0;
		const prev = current - 1;
		return prev;
	}

	private formatPass(next: number): string {
		const isGreaterThan99 = next > 99;
		const isBetween9and100 = next <= 99 && next > 9;
		if (isGreaterThan99) return `${next}`;
		if (isBetween9and100) return '0' + next;
		return '00' + next;
	}
}

export default Panel;
