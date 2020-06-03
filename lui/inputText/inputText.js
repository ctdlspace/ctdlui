import React from 'react'
import './inputText.less'

/**
 * Single line text input
 * @param {LuiInputProps} props
 * @return {*}
 */
export function LuiInputText(props) {
	return (
		<input
			type="text"
			className="luiInputText"
			name={props.name}
			value={props.value}
			onChange={props.onChange}/>
	)
}
