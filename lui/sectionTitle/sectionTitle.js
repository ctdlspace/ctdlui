import React from 'react'
import './sectionTitle.less'

/** SectionTitle
 *  @param props
 *  @param props.children
 *  @return {*}
 */
export function LuiSectionTitle(props) {
	return (
		<div className="luiSectionTitle">
			{props.children}
		</div>
	)
}
