/** File Uploader Component
 *  please note this component working only with https://github.com/ctdlspace/filoservo
 *
 *  @see https://github.com/ctdlspace/filoservo
 *  @author rusinozemtsev
 *  @version 0.0.1
 */

import React, { Fragment, useState } from 'react'
import { LuiThumbnail } from '../thumbnail/thumbnail'
import './inputFile.less'

/** FormFile
 * @param props
 * @param props.name
 * @param props.value
 * @param props.options
 * @param props.options.server
 * @param {function} props.onChange
 * @return {*}
 */
export const LuiInputFile = props => {
  const [value, setValue] = useState(props.value)
  const [loading, setLoading] = useState(false)
  const server = props.options.server
  const ref1 = React.createRef()
  const onChange = e => {
	const formData = new FormData()

	for (let i in ref1.current.files) {
	  formData.append('upload', ref1.current.files[i])
	}

	const options = {
	  method: 'POST',
	  body: formData,
	}

	setLoading(true)

	fetch(`${server}/upload`, options)
	  .then(res => res.json())
	  .then(data => {
		setLoading(false)
		setValue(`${server}/view/${data.files[0].nameWithOriginalName}`)
		props.onChange({
		  target: {
			name: props.name,
			value: `${server}/view/${data.files[0].nameWithOriginalName}`,
		  },
		})
	  })
	  .catch(console.error)
  }
  if (value !== props.value) {
	setValue(props.value)
  }
  return (
	<Fragment>
	  <input
		type='file'
		ref={ref1}
		style={{ display: 'none' }}
		onChange={onChange}/>
	  <div className='luiInputFile'>
		<div className='luiInputFile_preview'>
		  <LuiThumbnail
			src={value || '/images/icons/upload.svg'}/>
		</div>
		{loading
		  ? (
			<div className='luiInputFile_progress'>
			  Uploading <span className='luiInputFile_spinner'></span>
			</div>
		  )
		  : (
			<div>
			  <button
				className='luiInputFile_link'
				onClick={e => {
				  e.preventDefault()
				  ref1.current.click()
				}}>
				Upload File
			  </button>
			  {value && (
				<div>
				  {
					value.split('?')[1]
					&& <a
					  href={`${value.replace('/view/', '/download/')}`}
					  target="_blank">Download</a>
				  }
				</div>
			  )}
			</div>
		  )}
	  </div>
	</Fragment>
  )
}
