const Simpson = ({ f, a, b, n }) => {

    a = +a;
    let h = (b - a) / n;
    let x, x1, x2;
    let y = 0, y1, y2, y3;

    for (let i = 0; i < n; i++) {
        x1 = a + h * i;
        x = x1;
        y1 = eval(f);
        x2 = a + h * (i + 1);
        x = x2;
        y2 = eval(f);
        x = 0.5 * (x1 + x2);
        y3 = eval(f);
        y += (x2 - x1) / 6 * (y1 + 4 * y3 + y2);
    }

    return (y.toFixed(10) * 10/10);
}
 
export default Simpson;