import { centerRectangle, leftRectangle, rightRectangle, simpson, trapezoid } from './methods';
import { useTry } from './useTry';

enum Methods {
	CENTER = 'center',
	LEFT = 'left',
	RIGTH = 'right',
	TRAPEZOID = 'trapezoid',
	SIMPSON = 'simpson',
}

export function useCalculate(
	method: Methods,
	func: string,
	limitA: string,
	limitB: string,
	number: string,
): number | 'Ошибка' {
	const a = +limitA;
	const b = +limitB;
	const n = +number;

	// Проверка подынтегральной функции на корректность
	if (useTry(func) === 'Ошибка') {
		return 'Ошибка';
	}

	switch (method) {
		case Methods.CENTER:
			return centerRectangle(func, a, b, n);
		case Methods.LEFT:
			return leftRectangle(func, a, b, n);
		case Methods.RIGTH:
			return rightRectangle(func, a, b, n);
		case Methods.TRAPEZOID:
			return trapezoid(func, a, b, n);
		case Methods.SIMPSON:
			return simpson(func, a, b, n);
		default:
			return 'Ошибка';
	}
}
