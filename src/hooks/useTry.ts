export function useTry(f: string) {
	const x = 1;
	let y: number;
	try {
		// Считает, заданную функцию, при x = 1
		y = eval(f);
		if (Number.isNaN(y)) {
			return 'Ошибка';
		}
	} catch (e) {
		return 'Ошибка';
	}
	return y;
}
