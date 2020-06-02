import React, { useState } from 'react'

import './inputMultiSelect.less'
import { luiMapCom } from '../../helpers'

/** Select multiple values accept and return [string]
 *  @param {object} props
 *  @param {string} props.name
 *  @param {[]} props.value
 *  @param {[]} props.options
 *  @param {function} [props.onChange]
 *  @return {*}
 */
export function LuiInputMultiSelect(props) {
	const { options = [], value = [] } = props
	const [innerValue, setInnerValue] = useState(value)
	const onChange = e => {
		const value = [...e.target.options].reduce(
			(memo, option) => {
				if (option.selected) {
					memo.push(option.value)
				}
				return memo
			},
			[],
		)
		props.onChange?.(value)
		setInnerValue(value)
	}
	return (
		<select
			value={innerValue}
			className="luiInputMultiSelect"
			multiple={true}
			onChange={onChange}>
			{
				luiMapCom(options, option => {
					return (<option value={option._id}>{option.title}</option>)
				})
			}
		</select>
	)
}
