/**
 * Description
 * @author rusinozemtsev
 * @version 0.0.1
 */
import React from 'react'
import './pageTitle.less'
/**
 * Main title of the page
 *
 * @param props
 * @param props.children
 * @return {*}
 */
export function LuiPageTitle(props) {
	return (
		<div className="luiPageTitle">
			{props.children}
		</div>
	)
}
