import React from 'react'
import './inputText.less'

/** InputText
 *  @param props
 *  @param props.children
 *  @param {function} [props.onChange]
 *  @return {*}
 */
export function LuiInputText(props) {
	return (
		<input
			type="text"
			className="luiInputText"
			onChange={props.onChange}
		>{props.children}</input>
	)
}
