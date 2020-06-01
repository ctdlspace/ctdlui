import React from 'react'
import { render } from 'react-dom'
import { LuiApp } from '../lui/app'
import { LuiContent } from '../lui/content'
import { LuiForm } from '../lui/form'
import { LuiNotification } from '../lui/notification'
import { LuiPageTitle } from '../lui/pageTitle'
import { LuiGrid, LuiGrid_item } from '../lui/grid'
import { LuiSection } from '../lui/section'

const App = () => (
	<LuiApp>
		<LuiContent>
			<LuiPageTitle>CTDL-UI Components</LuiPageTitle>
			<LuiSection>
				<LuiForm
					fields={[
						{name: 'field1', label: 'Field 1'}
					]}
				/>
			</LuiSection>
			<LuiSection>
				<LuiNotification>This is Notification</LuiNotification>
			</LuiSection>
			<LuiGrid>
				<LuiGrid_item>This</LuiGrid_item>
				<LuiGrid_item>Is</LuiGrid_item>
				<LuiGrid_item>Grid</LuiGrid_item>
			</LuiGrid>
		</LuiContent>
	</LuiApp>
)
render(<App/>, document.getElementById('app'))
