/** Textarea component for input long text
 *
 *  @author rusinozemtsev
 *  @version 1.0.0
 */

import React from 'react'
import { luiCls } from '../../helpers'
import './inputTextarea.less'

/** LuiInputTextarea
 *  @param props
 *  @param props.name
 *  @param props.value
 *  @param [props.stretch]
 *  @param [props.rounded]
 *  @param [props.onKeyUp]
 *  @param [props.onKeyDown]
 *  @param [props.autoFocus]
 *  @param [props.placeholder]
 *  @param {function} [props.onChange]
 *  @return {*}
 */
export function LuiInputTextarea(props) {
  return <textarea
	placeholder={props.placeholder}
	name={props.name}
	value={props.value}
	onChange={props.onChange}
	onKeyUp={props.onKeyUp}
	onKeyDown={props.onKeyDown}
	autoFocus={props.autoFocus}
	{...luiCls('luiInputTextarea', props)}/>
}
