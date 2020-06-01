/** Description
 *  @module Grid
 *  @author rusinozemtsev
 *  @version 0.1.0
 */

import React from 'react'
import { luiCls } from '../../helpers'
import './grid.less'

/** Grid
 *  @param {object} props
 *  @param {string} [props.tight]
 *  @param {string} [props.airy]
 *  @param {string} [props.h100]
 *  @param {string} [props.spaceBetween]
 *  @param {string} [props.centered]
 *  @param {string} [props.end]
 *  @param {string} [props.children]
 */
export function LuiGrid(props) {
	return (
		<div{...luiCls('luiGrid', props)}>{props.children}</div>
	)
}

/** Grid_item
 *  @param {object} props
 *  @param {boolean} [props.size]
 *  @param {boolean} [props.h100]
 *  @param {boolean} [props.auto]
 *  @param {boolean} [props.quarter]
 *  @param {boolean} [props.third]
 *  @param {boolean} [props.half]
 *  @param {boolean} [props.sixEighths]
 *  @param {boolean} [props.fit] ячейка подстроится под размер своего контента
 *  @param {string} [props.children]
 *
 */

export function LuiGrid_item(props) {
	return (
		<div {...luiCls('luiGrid_item', props)}
				 style={{
					 ...props.size ? { flex: `0 0 ${props.size}rem`, width: 'auto' } : {},
				 }}
		>{props.children}</div>
	)
}
