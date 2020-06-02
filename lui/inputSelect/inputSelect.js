import React from 'react'
import './inputSelect.less'
import { luiMapCom } from '../../helpers'

/** LuiFormSelect
 *  @param props
 *  @param props.value
 *  @param props.name
 *  @param props.options
 *  @param [props.onChange]
 *  @return {*}
 */
export function LuiInputSelect(props) {
	const { options = [] } = props
	const Option = option => {
		return (
			<option value={option._id}>{option.title}</option>
		)
	}
	return (
		<select className="luiInputSelect" value={props.value} onChange={props.onChange}>
			{luiMapCom(options, Option)}
		</select>
	)
}
