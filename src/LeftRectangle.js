const LeftRectangle = ({ f, a, b, n }) => {

    a = +a;
    let h = (b - a) / n;
    let x;
    let y = 0;

    for (let i = 0; i <= n - 1; i++) {
      x = a + h * i;
      y += eval(f);
    }

    return ((h * y).toFixed(10) * 10/10);
}
 
export default LeftRectangle;