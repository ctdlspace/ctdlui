/** App Component
 *  @author rusinozemtsev
 *  @version 0.0.1
 */

import React from 'react'
import './app.less'

/** App
 *  @param props
 *  @param props.children
 *  @return {*}
 */
export function LuiApp(props) {
	return (
		<div className="luiApp">
			{props.children}
		</div>
	)
}
