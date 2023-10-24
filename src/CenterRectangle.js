const CenterRectangle = ({ f, a, b, n }) => {

    a = +a;
    let h = (b - a) / n;
    let x = a + h / 2;
    let y = eval(f);

    for (let i = 0; i < n - 1; i++) {
      x += h;
      y += eval(f);
    }

    return ((h * y).toFixed(10) * 10/10);
}
 
export default CenterRectangle;