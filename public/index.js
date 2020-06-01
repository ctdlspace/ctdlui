import React from 'react'
import { render } from 'react-dom'
import { LuiApp } from '../lui/app'
import { LuiContent } from '../lui/content'
import { LuiPageTitle } from '../lui/pageTitle'
import { LuiGrid, LuiGrid_item } from '../lui/grid'

const App = () => (
		<LuiApp>
			<LuiContent>
				<LuiPageTitle>CTDL-UI Components</LuiPageTitle>
				<LuiGrid airy>
					<LuiGrid_item skinny>1</LuiGrid_item>
					<LuiGrid_item skinny>2</LuiGrid_item>
				</LuiGrid>
			</LuiContent>
		</LuiApp>
)
render(<App/>, document.getElementById('app'))
