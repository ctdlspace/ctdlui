/** Button
 *  @param props
 *  @param props.children
 *  @param {function} [props.onClick]
 *  @return {*}
 */
export function Button (props) {
	return <button {...props}>{props.children}</button>
}
