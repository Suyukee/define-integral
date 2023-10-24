const Trapezoid = ({ f, a, b, n }) => {

    a = +a;
    let h = (b - a) / n;
    let x, x1, x2;
    let y = 0, y1, y2;

    for (let i = 0; i < n; i++) {
        x1 = a + h * i;
        x = x1;
        y1 = eval(f);
        x2 = a + h * (i + 1);
        x = x2;
        y2 = eval(f);
        y += 0.5 * (x2 - x1) * (y1 + y2);
    }

    return (y.toFixed(10) * 10/10);
}
 
export default Trapezoid;