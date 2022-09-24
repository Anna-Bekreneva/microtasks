import React, {useState} from 'react';
import './App.css';
import {Money, MoneyOneType} from './components/Money';

export type ButtonFilterType = 'all' | 'dollar' | 'ruble'

function App() {
	const [money, setMoney] = useState<Array<MoneyOneType>>([
		{ banknots: 'Dollars', value: 100, number: ' a1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' z1234567890' },
		{ banknots: 'RUBLS', value: 100, number: ' w1234567890' },
		{ banknots: 'Dollars', value: 100, number: ' e1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' c1234567890' },
		{ banknots: 'RUBLS', value: 100, number: ' r1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' x1234567890' },
		{ banknots: 'RUBLS', value: 50, number: ' v1234567890' },
	])

	const moneyRemove = (number: string) => {
		setMoney(money.filter(el => el.number !== number))
	}

	const [filters, setFilters] = useState<ButtonFilterType>('all')

	const filterMoney = (nameButton: ButtonFilterType) => {
		setFilters(nameButton)
	}

	let filtersMoney = money;

	if (filters === 'ruble') {
		filtersMoney = money.filter(el => el.banknots === 'RUBLS')
	}

	if (filters === 'dollar') {
		filtersMoney = money.filter(el => el.banknots === 'Dollars')
	}

	return (
		<Money moneyAll={filtersMoney} moneyRemove={moneyRemove} filterMoney={filterMoney}></Money>
	);
}

export default App;
