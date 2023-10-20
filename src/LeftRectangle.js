const LeftRectangle = ({ f, a, b, n }) => {

    let h = (b - a) / n;
    let x = +a;
    let y = 0;

    for (let i = 0; i < n; i++) {
      y += eval(f);
      x += h;
    }

    return (h * y);
}
 
export default LeftRectangle;