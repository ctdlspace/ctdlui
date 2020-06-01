/** Content is used for any sort of content that user have to view
 *  Content block should not be used as wrapper, because it's normally have own padding
 *  @author rusinozemtsev
 *  @version 0.0.1
 */
import React from 'react'
import './content.less'

/** Content
 *  @param props
 *  @param props.children
 *  @return {*}
 */
export function LuiContent(props) {
	return (
		<div className="luiContent">
			{props.children}
		</div>
	)
}
