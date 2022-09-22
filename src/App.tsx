import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';

type FilterType = 'all' | 'dollar' | 'ruble'

function App() {

	// let a = 1

	let [a, setA] = useState(1)

	const number = () => {
		setA(++a)
	}

	const reset = () => {
		setA(0)
	}

	return (
		<>
			<h1>{a}</h1>
			<button onClick={number}>number</button>
			<button onClick={reset}>reset</button>
		</>
	)
}

export default App;
