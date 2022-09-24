import React, {ChangeEvent, useState} from 'react';

type FullInputType = {
	addMessage: (title: string) => void
}

export const FullInput: React.FC<FullInputType> = (props) => {
	let [title, setTitle] = useState("")

	const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value)
	}

	const onClickButtonHandler = () => {
		props.addMessage(title)
		setTitle("")
	}

	return (
		<div>
			<input onChange={onChangeInputHandler} value={title}/>
			<button onClick={onClickButtonHandler}>+</button>
		</div>
	)
}