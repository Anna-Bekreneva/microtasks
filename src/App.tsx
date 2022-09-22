import React from 'react';
import './App.css';
import {Button} from './components/Button';

function App() {
	const Button1For = (subscriber: string, age: number) => {
		console.log(subscriber, age)
	}

	const Button2For = (subscriber: string) => {
		console.log(subscriber)
	}

	const Button3For = () => {
		console.log('I\'m stupid')
	}

	return (
		<>
			<Button name={'MyYouTubeChannel-1'} callBack={() => (Button1For('I\'m Ivan', 21))}/>
			<Button name={'MyYouTubeChannel-2'} callBack={() => (Button2For('I\'m Anna'))}/>
			<Button name={'Stupid Button'} callBack={Button3For}/>
		</>
	);

}

export default App;
