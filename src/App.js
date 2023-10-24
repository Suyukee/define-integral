import { useState } from "react";
import LeftRectangle from "./LeftRectangle";
import RightRectangle from "./RightRectangle";

function App() {
  
  const [method, setMethod] = useState('left');
  const [func, setFunc] = useState('x**2');
  const [limitA, setLimitA] = useState('1');
  const [limitB, setLimitB] = useState('10');
  const [num, setNum] = useState('10');

  const [value, setValue] = useState('289.665');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  function handleClick() {

    if (method==='left') {
        setValue( <LeftRectangle f={func} a={limitA} b={limitB} n={num} /> )
    } else if (method==='right') {
      setValue( <RightRectangle f={func} a={limitA} b={limitB} n={num} /> )
    } else setValue(method);
  }

  return (
    <div className="wrapper">

      <header>
        <h3>КАЛЬКУЛЯТОР</h3>
        <p>Приближённого вычисление определённых интегралов</p>
      </header>

      <div className="content">
        
        <form onSubmit={handleSubmit}>

          <div className="method">
            <p>Квадратурная функция</p>
            <select 
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="left">Левых прямоугольников</option>
              <option value="right">Правых прямоугольников</option>
            </select>
          </div>
          
          <div className="func">
            <p>Подынтегральная функция f(x)</p>
            <input 
              type="text" 
              required
              value={func}
              onChange={(e) => setFunc(e.target.value)}
            />
          </div>

          <div className="limit">

            <div className="limit-a">
              <p>Начальная граница</p>
              <input 
                type="number" 
                required
                value={limitA}
                onChange={(e) => setLimitA(e.target.value)}
              />
            </div>

            <div className="limit-b">
              <p>Конечная граница</p>
              <input 
                type="number" 
                required
                value={limitB}
                onChange={(e) => setLimitB(e.target.value)} 
              />
            </div>

          </div>

          <div className="num-btn">

            <div className="num">
              <p>Число интервалов</p>
              <input 
                type="number"
                required 
                value={num}
                onChange={(e) => setNum(e.target.value)} 
              />
            </div>

            <div className="btn">
              <button onClick={handleClick}>
                Вычислить
              </button>
            </div>

          </div>

          <p className="result">
            Результат = { value }
          </p>

        </form>

      </div>

    </div>
  );
}

export default App;