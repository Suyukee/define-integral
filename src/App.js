function App() {
  return (
    <div className="wrapper">
      <header>
        <h3>КАЛЬКУЛЯТОР</h3>
        <p>Приближённое вычисление определённых интегралов</p>
      </header>

      <div className="content">
        

        <form>

          <select id="method">
            <option value={1}>Левых прямоугольников</option>
            <option value={2}>Правых прямоугольников</option>
          </select>

          <div className="function">
            <p>f(x) =</p>
            <input defaultValue="Math.pow(x, 2)" />
          </div>

          <div className="limit">
            <div className="limit-a">
              <p>a =</p>
              <input type="number" defaultValue="1" />
            </div>

            <div className="limit-b">
              <p>b =</p>
              <input defaultValue="10" />
            </div>
          </div>

          <div className="number">
            <p>n =</p>
            <input defaultValue="10"/>
          </div>

          <div className="float">
            <p>Знаков после запятой:</p>
            <div className="slider">
              <input type="range" min="0" max="10" defaultValue= "3"/>
              <span className="number">3</span>
            </div>
          </div>

        </form>

      </div>

    </div>
  );
}

export default App;