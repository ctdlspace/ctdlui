import React from 'react'
import { render } from 'react-dom'
import { LuiApp } from '../lui/app'
import { LuiContent } from '../lui/content'
import { LuiContentTitle } from '../lui/contentTitle'
import { LuiForm } from '../lui/form'
import { LuiInputFile } from '../lui/inputFile'
import { LuiInputMultiSelect } from '../lui/inputMultiSelect'
import { LuiInputSelect } from '../lui/inputSelect'
import { LuiInputSelectOrText } from '../lui/inputSelectOrText/inputSelectOrText'
import { LuiNotification } from '../lui/notification'
import { LuiPageTitle } from '../lui/pageTitle'
import { LuiGrid, LuiGrid_item } from '../lui/grid'
import { LuiSection } from '../lui/section'
import { LuiSectionTitle } from '../lui/sectionTitle'

const name = 'L-UI'

const selectOptions = [
	{ _id: '1', 'title': 'Option 1' },
	{ _id: '2', 'title': 'Option 2' },
]

const App = () => (
	<LuiApp>
		<LuiContent>
			<LuiPageTitle>{name} — CTDL Design System</LuiPageTitle>
		</LuiContent>
		<LuiSection>
			<LuiContent>
				<LuiSectionTitle>Forms And Inputs</LuiSectionTitle>
				<LuiGrid>
					<LuiGrid_item>
						<LuiContentTitle>Form</LuiContentTitle>
						<LuiForm fields={[
							{ name: 'field1', label: 'Field 1' },
							{ name: 'field2', label: 'Field 2', type: LuiInputFile, options: { server: 'https://fs.ctdl.space' } },
						]}/>
					</LuiGrid_item>
					<LuiGrid_item>
						<LuiContentTitle>Select</LuiContentTitle>
						<LuiInputSelect
							name="select1"
							options={selectOptions}/>
					</LuiGrid_item>
					<LuiGrid_item>
						<LuiContentTitle>MultiSelect</LuiContentTitle>
						<LuiInputMultiSelect
							name="select2"
							value={['1']}
							options={selectOptions}/>
					</LuiGrid_item>
					<LuiGrid_item>
						<LuiContentTitle>SelectOrText</LuiContentTitle>
						<LuiInputSelectOrText
							name="select3"
							value=""
							options={[...selectOptions, { _id: '', title: 'Other' }]}/>
					</LuiGrid_item>
				</LuiGrid>
			</LuiContent>
		</LuiSection>
		<LuiSection>
			<LuiContent>
				<LuiSectionTitle>Notifications</LuiSectionTitle>
				<LuiNotification>This is Notification</LuiNotification>
			</LuiContent>
		</LuiSection>
		<LuiSection>
			<LuiContent>
				<LuiSectionTitle>Grid</LuiSectionTitle>
				<LuiGrid>
					<LuiGrid_item>This</LuiGrid_item>
					<LuiGrid_item>Is</LuiGrid_item>
					<LuiGrid_item>Grid</LuiGrid_item>
					<LuiGrid_item>Baby!</LuiGrid_item>
				</LuiGrid>
			</LuiContent>
		</LuiSection>
		<LuiSection>
			<LuiContent>
				<LuiSectionTitle>Misc</LuiSectionTitle>
				<LuiGrid>
					<LuiGrid_item>1</LuiGrid_item>
					<LuiGrid_item>2</LuiGrid_item>
					<LuiGrid_item>3</LuiGrid_item>
					<LuiGrid_item>4</LuiGrid_item>
				</LuiGrid>
			</LuiContent>
		</LuiSection>
	</LuiApp>
)
render(
	<App/>,
	document.getElementById('app'),
)
