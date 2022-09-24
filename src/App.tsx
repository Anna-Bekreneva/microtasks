import React, {useState} from 'react';
import './App.css';
import {Money, MoneyOneType} from './components/Money';
import {FullInput} from './components/lesson6/FullInput';
import {Input} from './components/lesson6/Input';
import {Button} from './components/lesson6/Button';

export type ButtonFilterType = 'all' | 'dollar' | 'ruble'

function App() {
	//lesson 5
	// const [money, setMoney] = useState<Array<MoneyOneType>>([
	// 	{ banknots: 'Dollars', value: 100, number: ' a1234567890' },
	// 	{ banknots: 'Dollars', value: 50, number: ' z1234567890' },
	// 	{ banknots: 'RUBLS', value: 100, number: ' w1234567890' },
	// 	{ banknots: 'Dollars', value: 100, number: ' e1234567890' },
	// 	{ banknots: 'Dollars', value: 50, number: ' c1234567890' },
	// 	{ banknots: 'RUBLS', value: 100, number: ' r1234567890' },
	// 	{ banknots: 'Dollars', value: 50, number: ' x1234567890' },
	// 	{ banknots: 'RUBLS', value: 50, number: ' v1234567890' },
	// ])
	//
	// const moneyRemove = (number: string) => {
	// 	setMoney(money.filter(el => el.number !== number))
	// }
	//
	// const [filters, setFilters] = useState<ButtonFilterType>('all')
	//
	// const filterMoney = (nameButton: ButtonFilterType) => {
	// 	setFilters(nameButton)
	// }
	//
	// let filtersMoney = money;
	//
	// if (filters === 'ruble') {
	// 	filtersMoney = money.filter(el => el.banknots === 'RUBLS')
	// }
	//
	// if (filters === 'dollar') {
	// 	filtersMoney = money.filter(el => el.banknots === 'Dollars')
	// }
	//
	// return (
	// 	<Money moneyAll={filtersMoney} moneyRemove={moneyRemove} filterMoney={filterMoney}></Money>
	// );

	//lesson 6
	let [message, setMessages] = useState([
		{message: 'message1'},
		{message: 'message2'},
		{message: 'message3'},
	])

	let [title, setTitle] = useState("")

	const addMessage = (title: string) => {
		let newMessage = {message: title}
		setMessages([newMessage, ...message])
	}

	const callBackButtonHandler = () => {
		addMessage(title)
		setTitle("")
	}

	return (
		<div className={'App'}>
			<Input setTitle={setTitle} title={title}></Input>
			<Button name={'+'} callBack={callBackButtonHandler}></Button>

			{/*<FullInput addMessage={addMessage}></FullInput>*/}

			{message.map((el, index) => {
				return (
					<div key={index}>
						{el.message}
					</div>
				)
			})}
		</div>
	)
}

export default App;
