import React from 'react'
import { render } from 'react-dom'
import { LuiApp } from '../lui/app'
import { LuiContent } from '../lui/content'
import { LuiContentTitle } from '../lui/contentTitle'
import { LuiForm } from '../lui/form'
import { LuiInputFile } from '../lui/inputFile'
import { LuiNotification } from '../lui/notification'
import { LuiPageTitle } from '../lui/pageTitle'
import { LuiGrid, LuiGrid_item } from '../lui/grid'
import { LuiSection } from '../lui/section'
import { LuiSectionTitle } from '../lui/sectionTitle'

const name = 'L-UI'

const App = () => (
	<LuiApp>
		<LuiPageTitle>{name} — CTDL Design System</LuiPageTitle>
		<LuiSection>
			<LuiSectionTitle>Forms And Inputs</LuiSectionTitle>
			<LuiGrid>
				<LuiGrid_item>
					<LuiContentTitle>Form</LuiContentTitle>
					<LuiForm fields={[
						{ name: 'field1', label: 'Field 1'},
						{ name: 'field2', label: 'Field 2', type: LuiInputFile, options: { server: 'https://fs.ctdl.space' } },
					]}/>
				</LuiGrid_item>
				<LuiGrid_item>

				</LuiGrid_item>
				<LuiGrid_item></LuiGrid_item>
				<LuiGrid_item></LuiGrid_item>
			</LuiGrid>
		</LuiSection>
		<LuiSection>
			<LuiNotification>This is Notification</LuiNotification>
		</LuiSection>
		<LuiSection>
			<LuiSectionTitle>Grid</LuiSectionTitle>
			<LuiGrid>
				<LuiGrid_item>This</LuiGrid_item>
				<LuiGrid_item>Is</LuiGrid_item>
				<LuiGrid_item>Grid</LuiGrid_item>
				<LuiGrid_item>Baby!</LuiGrid_item>
			</LuiGrid>
		</LuiSection>
		<LuiSection>
			<LuiSectionTitle>Misc</LuiSectionTitle>
			<LuiGrid>
				<LuiGrid_item>1</LuiGrid_item>
				<LuiGrid_item>2</LuiGrid_item>
				<LuiGrid_item>3</LuiGrid_item>
				<LuiGrid_item>4</LuiGrid_item>
			</LuiGrid>
		</LuiSection>
	</LuiApp>
)
render(
	<App/>,
	document.getElementById('app')
)
