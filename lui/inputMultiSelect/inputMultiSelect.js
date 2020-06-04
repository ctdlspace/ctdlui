import React, { useState, useEffect } from 'react'

import { luiMapCom, luiFireChange, luiObjAreEq } from '../../helpers'
import './inputMultiSelect.less'

/**
 * Select multiple values accept and return [string]
 * @param {object} props
 * @param {string} props.name
 * @param {[]} props.value
 * @param {[]} props.options
 * @param {function} [props.onChange]
 * @return {*}
 */
export function LuiInputMultiSelect(props) {
	const { options = [], value = [] } = props
	const [innerValue, setInnerValue] = useState(
		Array.isArray(value) ? value : []
	)
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
		setInnerValue(value)
		luiFireChange(props, value)
	}
	// useEffect(() => {
	// 	console.log('useEffect')
	// 	if (!luiObjAreEq(innerValue, props.value)) {
	// 		console.log('luiFireChange', innerValue, props.value)
	// 		//luiFireChange(props, value)
	// 	}
	// })
	return (
		<select
			className="luiInputMultiSelect"
			name={props.name}
			value={innerValue}
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
