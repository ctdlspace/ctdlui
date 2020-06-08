import React from 'react'
import { luiCls, luiUseState } from '../../helpers'
import './summary.less'

/**
 * Does what it does
 *
 * @typedef {{}} LuiSummaryProps
 * @property {string|function} Title
 * @property {string|function} Content
 *
 * @example <LuiSummary title="summary" Content={props => 'content'}/>
 *
 * @param {LuiSummaryProps} props
 * @return {{}}
 *
 */
export function LuiSummary(props) {
  const { Title, Content } = props
  const [state, setState] = luiUseState({
	open: false,
  })
  const toggleContent = e => {
	setState({ open: !state.open })
  }
  return (
	<div {...luiCls('luiSummary', state)}>
	  <div
		className="luiSummary_title"
		onClick={toggleContent}>
		<Title/>
	  </div>
	  {state.open && (
		<div className="luiSummary_content">
		  <Content/>
		</div>
	  )}
	</div>)
}
