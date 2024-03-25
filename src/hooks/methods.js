export const centerRectangle = (f, a, b, n) => {
	a = +a;
	let h = (b - a) / n;
	let x = a + h / 2;
	let y = eval(f);
	for (let i = 0; i < n - 1; i++) {
		x += h;
		y += eval(f);
	}
	return ((h * y).toFixed(10) * 10) / 10;
};

export const leftRectangle = (f, a, b, n) => {
	a = +a;
	let h = (b - a) / n;
	let x;
	let y = 0;
	for (let i = 0; i <= n - 1; i++) {
		x = a + h * i;
		y += eval(f);
	}
	return ((h * y).toFixed(10) * 10) / 10;
};

export const rightRectangle = (f, a, b, n) => {
	a = +a;
	let h = (b - a) / n;
	let x;
	let y = 0;
	for (let i = 1; i <= n; i++) {
		x = a + h * i;
		y += eval(f);
	}
	return ((h * y).toFixed(10) * 10) / 10;
};

export const trapezoid = (f, a, b, n) => {
	a = +a;
	let h = (b - a) / n;
	let x, x1, x2;
	let y = 0,
		y1,
		y2;
	for (let i = 0; i < n; i++) {
		x1 = a + h * i;
		x = x1;
		y1 = eval(f);
		x2 = a + h * (i + 1);
		x = x2;
		y2 = eval(f);
		y += 0.5 * (x2 - x1) * (y1 + y2);
	}
	return (y.toFixed(10) * 10) / 10;
};

export const simpson = (f, a, b, n) => {
	a = +a;
	let h = (b - a) / n;
	let x, x1, x2;
	let y = 0,
		y1,
		y2,
		y3;
	for (let i = 0; i < n; i++) {
		x1 = a + h * i;
		x = x1;
		y1 = eval(f);
		x2 = a + h * (i + 1);
		x = x2;
		y2 = eval(f);
		x = 0.5 * (x1 + x2);
		y3 = eval(f);
		y += ((x2 - x1) / 6) * (y1 + 4 * y3 + y2);
	}
	return (y.toFixed(10) * 10) / 10;
};
