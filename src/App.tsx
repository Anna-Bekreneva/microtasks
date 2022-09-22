import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';

function App() {
	type FilterType = 'all' | 'dollar' | 'ruble'
	const [money, setMoney] = useState([
		{ banknots: 'Dollars', value: 100, number: ' a1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' z1234567890' },
		{ banknots: 'RUBLS', value: 100, number: ' w1234567890' },
		{ banknots: 'Dollars', value: 100, number: ' e1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' c1234567890' },
		{ banknots: 'RUBLS', value: 100, number: ' r1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' x1234567890' },
		{ banknots: 'RUBLS', value: 50, number: ' v1234567890' },
	])

	const [filter, setFilter] = useState<FilterType>('all')

	const onClickFilterHundler = (nameButton: FilterType) => {
		setFilter(nameButton)
	}

	let currentMoney = money;
	if (filter === "ruble") {
		currentMoney = money.filter((el) => el.banknots === "RUBLS")
	}
	if (filter === "dollar") {
		currentMoney = money.filter((el) => el.banknots === "Dollars")
	}

	return (
		<>
			<ul>
				{currentMoney.map((objFromMontyArr, index) => {
					return (
						<li key={index}>
							<span></span>
							<span>{objFromMontyArr.banknots}</span>
							<span>{objFromMontyArr.value}</span>
							<span>{objFromMontyArr.number}</span>
						</li>
					);
				})}
			</ul>

			<button onClick={() => (onClickFilterHundler("all"))}>all</button>
			<button onClick={() => (onClickFilterHundler('ruble'))}>ruble</button>
			<button onClick={() => (onClickFilterHundler('dollar'))}>dollar</button>
		</>
	);
}

export default App;
