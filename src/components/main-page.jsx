'use client';

import { useState } from 'react';
import useCalculate from '../hooks/useCalculate';

const MainPage = () => {
	const [method, setMethod] = useState('center');
	const [func, setFunc] = useState('x**2');
	const [limitA, setLimitA] = useState('1');
	const [limitB, setLimitB] = useState('10');
	const [num, setNum] = useState('10');

	const [value, setValue] = useState('332.3925');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	function handleClick() {
		const result = useCalculate(method, func, limitA, limitB, num);
		setValue(result);
	}

	return (
		<main className="wrapper">
			<header className="header">
				<h3 className="header__title">КАЛЬКУЛЯТОР</h3>
				<p className="header__text">Приближённого вычисления определённых интегралов</p>
			</header>

			<div className="content">
				<form className="form" onSubmit={handleSubmit}>
					<div className="form__field">
						<label className="field__label">Метод интегрирования</label>
						<select
							className="field__select"
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

					<div className="form__field">
						<label className="field__label">Подынтегральная функция f(x)</label>
						<input
							className="field__input"
							type="text"
							required
							value={func}
							onChange={(e) => setFunc(e.target.value)}
						/>
					</div>

					<div className="form__field-group">
						<div className="field-group__field">
							<label className="field__label">Нижний предел</label>
							<input
								className="field__input"
								type="number"
								required
								value={limitA}
								onChange={(e) => setLimitA(e.target.value)}
							/>
						</div>

						<div className="field-group__field">
							<label className="field__label">Верхний предел</label>
							<input
								className="field__input"
								type="number"
								required
								value={limitB}
								onChange={(e) => setLimitB(e.target.value)}
							/>
						</div>
					</div>

					<div className="form__field-group">
						<div className="field-group__field">
							<label className="field__label">Число интервалов</label>
							<input
								className="field__input"
								type="number"
								required
								value={num}
								onChange={(e) => setNum(e.target.value)}
							/>
						</div>

						<div className="field-group__btn">
							<button className="btn__button" onClick={handleClick}>
								Вычислить
							</button>
						</div>
					</div>

					<p className="form__result">Результат = {value}</p>
				</form>
			</div>
		</main>
	);
};

export default MainPage;
