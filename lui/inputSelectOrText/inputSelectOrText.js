import React, { useState } from 'react'
import './inputSelectOrText.less'
import { LuiInputSelect } from '../inputSelect'
import { LuiInputText } from '../inputText/inputText'

/** InputSelectOrText "Other option will be added"
 *                    if you want to customize pass {title: "Custom Other"} with "?" as _id
 *
 *  @param props
 *  @param props.name
 *  @param props.value
 *  @param {[]} props.options
 *  @return {*}
 */
export function LuiInputSelectOrText(props) {
	const { options = [], name } = props
	const [value, setValue] = useState(props.value)
	const [isCustomShown, setIsCustomShown] = useState(false)
	const onChange = e => {
		if (e.target.value === '?') {
			setIsCustomShown(true)
		} else {
			setIsCustomShown(false)
		}
		setValue(e.target.value)
	}
	return (
		<div className="luiInputSelectOrText">
			<div>
				<LuiInputSelect options={options} value={value} onChange={onChange}/>
			</div>
			{isCustomShown && <div>
				<LuiInputText name={name} value={value}/>
			</div>}
		</div>
	)
}
