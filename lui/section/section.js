/** Section is a logically isolated part of content that should be horizontally separated
 *  most generic example of the section is a website horizontal section
 *
 *  @author rusinozemtsev
 *  @version 0.0.1
 */

import React from 'react'
import './section.less'

/** Section
 *  @param props
 *  @param props.children
 *  @return {*}
 */
export function LuiSection(props) {
	return (
		<div className="luiSection">
			{props.children}
		</div>
	)
}
