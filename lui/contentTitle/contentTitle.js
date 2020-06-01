import React from 'react'
import './contentTitle.less'

/** ContentTitle
 *  @param props
 *  @param props.children
 *  @return {*}
 */
export function LuiContentTitle(props) {
	return (
		<div className="luiContentTitle">
			{props.children}
		</div>
	)
}
