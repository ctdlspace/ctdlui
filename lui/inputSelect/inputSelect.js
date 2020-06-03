import React from 'react'
import './inputSelect.less'
import { luiMapCom } from '../../helpers'

/** LuiInputSelect
 *  @example <LuiInputSelect
 *  					name="select"
 *  					options={[
 *  						{_id: '1', title: 'Option 1'},
 *  						{_id: '2', title: 'Option 2'},
 *  					]}
 *  					onChange={console.log}
 *  					/>
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
