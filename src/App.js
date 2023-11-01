import { useState } from "react";
import CenterRectangle from "./CenterRectangle";
import LeftRectangle from "./LeftRectangle";
import RightRectangle from "./RightRectangle";
import Trapezoid from "./Trapezoid";
import Simpson from "./Simpson";

function App() {
  
  const [method, setMethod] = useState('center');
  const [func, setFunc] = useState('x**2');
  const [limitA, setLimitA] = useState('1');
  const [limitB, setLimitB] = useState('10');
  const [num, setNum] = useState('10');

  const [value, setValue] = useState('332.3925');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  function handleClick() {

    if (method === 'center') {
      setValue( <CenterRectangle f={func} a={limitA} b={limitB} n={num} /> );
    }else if (method === 'left') {
        setValue( <LeftRectangle f={func} a={limitA} b={limitB} n={num} /> );
    } else if (method === 'right') {
      setValue( <RightRectangle f={func} a={limitA} b={limitB} n={num} /> );
    } else if (method === 'trapezoid') {
      setValue( <Trapezoid f={func} a={limitA} b={limitB} n={num} /> );
    } else if (method === 'simpson') {
      setValue( <Simpson f={func} a={limitA} b={limitB} n={num} /> );
    } else setValue('Ошибка'); 
  }

  return (
    <div className="wrapper">

      <header>
        <h3>КАЛЬКУЛЯТОР</h3>
        <p>Приближённого вычисления определённых интегралов</p>
      </header>

      <div className="content">
        
        <form onSubmit={handleSubmit}>

          <div className="method">
            <p>Метод интегрирования</p>
            <select 
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="center">Средних прямоугольников</option>
              <option value="left">Левых прямоугольников</option>
              <option value="right">Правых прямоугольников</option>
              <option value="trapezoid">Трапеций</option>
              <option value="simpson">Симпсона</option>
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
              <p>Нижний предел</p>
              <input 
                type="number" 
                required
                value={limitA}
                onChange={(e) => setLimitA(e.target.value)}
              />
            </div>

            <div className="limit-b">
              <p>Верхний предел</p>
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