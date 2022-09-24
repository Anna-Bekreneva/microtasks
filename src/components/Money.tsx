import React from 'react';
import {ButtonFilterType} from '../App';

type MoneyType = {
	moneyAll: Array<MoneyOneType>
	moneyRemove: (number: string) => void
	filterMoney: (nameButton: ButtonFilterType) => void
}

export type MoneyOneType = {
	banknots: string
	value: number
	number: string
}

export const Money: React.FC<MoneyType> = (props) => {
	return (
		<>
			<ul>
				{props.moneyAll.map(money => {
					return (
						<li key={money.number}>
							<span>{money.banknots}</span>
							<span>{money.value}</span>
							<button onClick={() => (props.moneyRemove(money.number))}>X</button>
						</li>
					)
				})}
			</ul>
			<button onClick={() => (props.filterMoney('all'))}>all</button>
			<button onClick={() => (props.filterMoney('dollar'))}>dollar</button>
			<button onClick={() => (props.filterMoney('ruble'))}>ruble</button>
		</>
	)
}