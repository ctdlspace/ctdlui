/**
 * Creates className value for the component
 * all booleans are interpreted as BEM modifications
 *
 * @example luiCls('comName', {hidden: true}) -> 'comName comName__hidden'
 * @param baseClassName
 * @param props
 * @return {{}}
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
