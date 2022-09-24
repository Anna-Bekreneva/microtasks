import React, {ChangeEvent} from 'react';

type InputType = {
	setTitle: (title: string) => void;
	title: string
}

export const Input: React.FC<InputType> = (props) => {

	const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
		props.setTitle(event.currentTarget.value)
	}

	return (
		<input onChange={onChangeInputHandler} value={props.title}/>
	)
}