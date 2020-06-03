/**
 * File Uploader for Filoservo
 * @see https://github.com/ctdlspace/filoservo
 *
 * @author rusinozemtsev
 * @version 0.0.1
 *
 */
import React, { Fragment, useEffect, useState } from 'react'
import { LuiThumbnail } from '../thumbnail/thumbnail'
import { luiFireChange, luiFireEvent, luiUseState } from '../../helpers'
import './inputFile.less'
import { LuiInputText } from '../inputText'

/**
 * Upload file to Filoservo and show preview
 *
 * @typedef {{}} LuiInputFileProps
 * @property {string} name
 * @property {string} value
 * @property {string} options.server Filoservo url
 * @property {boolean} [options.showUrlInput=false] allow to enter file url manually
 * @property {function} onChange
 *
 * @param {LuiInputFileProps} props
 * @return {*}
 *
 */
export const LuiInputFile = props => {
	const { value = '', options = {} } = props
	const { server } = options
	const [state, setState] = luiUseState({
		value,
		isLoading: false,
	})
	/** @type { {current: HTMLInputElement} } **/
	const ref1 = React.createRef()
	/** @param { FileservoResponse|string } dataOrString **/
	const setData = dataOrString => {
		const file = dataOrString?.files[0].nameWithOriginalName
		const value = file ? `${server}/view/${file}` : dataOrString
		setState({ value, isLoading: false })
	}
	/** @param { LuiFormEvent } e */
	const onChange = e => {
		const formData = new FormData()
		for (let i in ref1.current.files) {
			formData.append('upload', ref1.current.files[i])
		}
		const options = {
			method: 'POST',
			body: formData,
		}
		setState({ isLoading: true })
		fetch(`${server}/upload`, options)
			.then(res => res.json())
			.then(setData)
			.catch(console.error)
	}
	useEffect(() => {
		props.value !== state.value && luiFireChange(props, state.value)
	})
	return (
		<Fragment>
			<input
				ref={ref1}
				style={{ display: 'none' }}
				type='file'
				onChange={onChange}/>
			<div className='luiInputFile'>
				<div className='luiInputFile_preview'>
					<LuiThumbnail src={state.value || '/images/icons/upload.svg'}/>
				</div>
				{state.isLoading ? (
					<div className='luiInputFile_progress'>
						Uploading <span className='luiInputFile_spinner'/>
					</div>
				) : (
					<div>
						{options.showUrlInput && <div>
							<LuiInputText
								name={'url'}
								value={state.value}
								onChange={e => {
									setState({ value: e.target.value })
								}}/>
						</div>}
						<button
							className='luiInputFile_link'
							onClick={
								e => {
									e.preventDefault()
									ref1.current.click()
								}
							}>Upload File
						</button>
						{state.value && (
							<div>
								{state.value.split('?')[1] && (
									<a
										href={`${state.value.replace('/view/', '/download/')}`}
										target="_blank">Download</a>
								)}
							</div>
						)}
					</div>
				)}
			</div>
		</Fragment>
	)
}
