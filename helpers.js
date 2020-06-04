import React, { useState } from 'react'

/** Creates className value for the component
 *  all booleans are interpreted as BEM modifications
 *
 *  @example luiCls('comName', {hidden: true}) -> 'comName comName__hidden'
 *  @param baseClassName
 *  @param props
 *  @return {{}}
 */
export const luiCls = (baseClassName = '', props = {}) => {
	let mods = Object
		.keys(props)
		.map(name => props[name] === true
			? name
			: undefined,
		)
	const classes = [baseClassName]
	for (let mod of mods) {
		if (mod === undefined) {
			continue
		}
		props[mod] && classes
			.push(`${baseClassName}__${mod}`)
	}
	return { className: classes.join(' ') }
}

/**
 * mapCom automatically does KEY stuff
 * @param {[]} list
 * @param {function} Com
 * @returns {*}
 */
export const luiMapCom = (list, Com) => {
	return list.map((el, key) => {
		return (
			<React.Fragment key={key}>
				<Com {...el}/>
			</React.Fragment>
		)
	})
}
export const luiObjAreEq = (o1, o2) => {
	const str1 = JSON.stringify(o1)
	const str2 = JSON.stringify(o2)
	return str1 === str2
}
/**
 * Send event using name taken from props
 * @param props
 * @param event
 * @param value
 */
export const luiFireEvent = (props, event, value) => {
	props[event]?.({
		target: { name: props.name, value },
	})
}
export const luiFireChange = (props, value) => {
	luiFireEvent(props, 'onChange', value)
}
/**
 * Patch state
 * @param init
 * @return {[{}, function({}): {}]}
 */
export const luiUseState = (init) => {
	const [state, setState] = useState(init)
	return [
		state,
		patch => setState({ ...state, ...patch }),
	]
}
