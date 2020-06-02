import React from 'react'
import { luiCls } from '../../helpers'
import './button.less'

/** Button
 *  @param props
 *  @param props.children
 *  @param {function} [props.onClick]
 *  @return {*}
 */
export function LuiButton(props) {
	return (
		<button
			onClick={props.onClick}
			{...luiCls('luiButton')}>{props.children}</button>
	)
}
