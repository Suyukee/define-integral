import { useState } from "react";
import LeftRectangle from "./LeftRectangle";

function App() {
  
  const [func, setFunc] = useState('x**2');
  const [limitA, setLimitA] = useState('1');
  const [limitB, setLimitB] = useState('10');
  const [num, setNum] = useState('10');

  let result = <LeftRectangle f={func} a={limitA} b={limitB} n={num} />;

  return (
    <div className="wrapper">
      <header>
        <h3>КАЛЬКУЛЯТОР</h3>
        <p>Приближённое вычисление определённых интегралов</p>
      </header>

      <div className="content">
        

        <form>
          <div className="method">
            <p>Метод</p>
            <select>
              <option value={1}>Левых прямоугольников</option>
              <option value={2}>Правых прямоугольников</option>
            </select>
          </div>
          
          <div className="func">
            <p>f(x):</p>
            <input 
              type="text" 
              required
              value={func}
              onChange={(e) => setFunc(e.target.value)}
            />
          </div>

          <div className="limit">
            <div className="limit-a">
              <p>a:</p>
              <input 
                type="number" 
                required
                value={limitA}
                onChange={(e) => setLimitA(e.target.value)}
              />
            </div>

            <div className="limit-b">
              <p>b:</p>
              <input 
                type="number" 
                required
                value={limitB}
                onChange={(e) => setLimitB(e.target.value)} 
              />
            </div>
          </div>

          <div className="num">
            <p>n:</p>
            <input 
              type="number"
              required 
              value={num}
              onChange={(e) => setNum(e.target.value)} 
            />
          </div>

          {/* <div className="float">
            <p>Знаков после запятой:</p>
            <div className="slider">
              <input type="range" min="0" max="10" defaultValue= "3"/>
              <span className="number">3</span>
            </div>
          </div> */}

          {/* <p>{ func }</p>
          <p>{ limitA }</p>
          <p>{ limitB }</p>
          <p>{ num }</p>
          <p>{ func }</p> */}

          {/* <div>
            <LeftRectangle f={func} a={limitA} b={limitB} n={num} />
          </div> */}

          <p className="result">Результат: { result }</p>

        </form>

      </div>

    </div>
  );
}

export default App;