/** Description
 *  @author rusinozemtsev
 *  @version 0.0.1
 */

import React, { useState } from 'react'
import { LuiInputSelect } from '../inputSelect'
import { LuiInputText } from '../inputText/inputText'
import './inputSelectOrText.less'
import { luiFireEvent, luiFireChange } from '../../helpers'

/** "Other" option will be added
 *  if you want to customize pass {title: "Custom Other"} with "" as _id
 *
 *  @param props
 *  @param {string} props.name
 *  @param {string} props.value
 *  @param {[]} props.options
 *  @return {*}
 */
export function LuiInputSelectOrText(props) {
	const { options = [], name } = props
	const [value, setValue] = useState(props.value)
	const onChange = e => {
		setValue(e.target.value)
		luiFireChange(props, e.target.value)
	}
	const isCustomShown = !options.find(({ _id }) => _id === value) || value === ''
	return (
		<div className="luiInputSelectOrText">
			<div>
				<LuiInputSelect
					options={options}
					name={name}
					value={value}
					onChange={onChange}/>
			</div>
			{isCustomShown && (
				<div>
					<LuiInputText
						name={name}
						value={value}
						onChange={onChange}
					/>
				</div>
			)}
		</div>
	)
}
