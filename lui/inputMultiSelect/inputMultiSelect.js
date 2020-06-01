import React from 'react'

import './inputMultiSelect.less'
import { mapCom } from '../../helpers'

/** InputMultiSelect
 *  @param props
 *  @param props.value
 *  @param props.name
 *  @param props.options
 *  @param [props.onChange]
 *  @return {*}
 */
export function LuiInputMultiSelect(props) {
	const { options = [] } = props
	return (
		<select className="luiInputMultiSelect" multiple={true} onChange={props.onChange}>
			{
				mapCom(options, option => {
					return (<option value={option._id}>{option.title}</option>)
				})
			}
		</select>
	)
}
