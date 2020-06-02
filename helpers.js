import React from 'react'
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

/** mapCom automatically does KEY stuff
 *  @param {[]} list
 *  @callback Com
 *  @returns {*}
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

export const luiCompareObj = (o1, o2) => {
	return JSON.stringify(o1) === JSON.stringify(o2)
}
