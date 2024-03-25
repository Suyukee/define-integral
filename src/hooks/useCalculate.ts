import { centerRectangle, leftRectangle, rightRectangle, simpson, trapezoid } from './methods';

enum Methods {
	CENTER = 'center',
	LEFT = 'left',
	RIGTH = 'right',
	TRAPEZOID = 'trapezoid',
	SIMPSON = 'simpson',
}

function useCalculate(
	method: Methods,
	f: string,
	a: string,
	b: string,
	n: string,
): number | 'Ошибка' {
	switch (method) {
		case Methods.CENTER:
			return centerRectangle(f, a, b, n);
		case Methods.LEFT:
			return leftRectangle(f, a, b, n);
		case Methods.RIGTH:
			return rightRectangle(f, a, b, n);
		case Methods.TRAPEZOID:
			return trapezoid(f, a, b, n);
		case Methods.SIMPSON:
			return simpson(f, a, b, n);
		default:
			return 'Ошибка';
	}
}

export default useCalculate;
