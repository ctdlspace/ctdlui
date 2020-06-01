/** This component is used to notify user about most important things
 *  @author rusinozemtsev
 *  @version 0.0.1
 */

import React from 'react'
import './notification.less'

/** Notification
 *  @param props
 *  @param props.children
 *  @return {*}
 */
export function LuiNotification(props) {
	return (
		<div className="luiNotification">
			{props.children}
		</div>
	)
}
