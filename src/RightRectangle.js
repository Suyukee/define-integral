const RightRectangle = ({ f, a, b, n }) => {

    a = +a;
    let h = (b - a) / n;
    let x;
    let y = 0;

    for (let i = 1; i <= n; i++) {
      x = a + h * i;
      y += eval(f);
    }

    return ((h * y).toFixed(10) * 10/10);
}
 
export default RightRectangle;