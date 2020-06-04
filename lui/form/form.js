/**
 * Allows to build typical forms
 * @module Form
 * @author rusinozemtsev
 * @version 0.1.0
 */

/**
 * @typedef {object} LuiFormEvent
 * @property {object} target
 * @property {string} target.name
 * @property {*} target.value
 */

/**
 * @typedef     {object}     LuiFormInput
 * @property    {string}     name
 * @property    {function}   [type] react component for type
 * @property    {string}     [label]
 * @property    {boolean}    [required] default: true
 * @property    {object}     [options]
 */

/**
 * @typedef     {object}     LuiButton
 * @property    {string}     name
 * @property    {function}   [type] button type. default: submit
 * @property    {string}     [text]
 * @property    {boolean}    [required]
 */

import React, { useState, useEffect } from 'react'
import './form.less'
import { LuiButton } from '../button/button'
import { LuiInputText } from '../inputText/inputText'
import { luiFireEvent } from '../../helpers'

/**
 * Form Settings
 * @type {{defaultInputType: (function(*): *), defaultButtonType: (function(*): *)}}
 */
export const LuiFormSettings = {
	defaultInputType: LuiInputText,
	defaultButtonType: LuiButton,
}

/**
 * Create form based on fields
 *
 * @typedef {object} LuiFormProps
 * @property {{[string]: *}} values
 * @property {[LuiFormInput]} fields
 * @property {[LuiButton]} buttons
 * @property {function} onSubmit
 *
 * @param {LuiFormProps} props
 * @returns {*}
 */
export const LuiForm = props => {
	const {
		fields,
		values,
		buttons,
	} = props
	const defaultButtons = [{
		type: LuiFormSettings.defaultButtonType,
		text: 'Submit',
	}]
	const defaultFields = [{
		name: 'title',
		type: LuiFormSettings.defaultInputType,
	}]
	const initialValues = (fields || defaultFields).reduce(
		(acc, field, index) => {
			if (!field.name) {
				throw new Error(`LuiForm can't accept field "${field.type}:${index}" without name`)
			}
			acc[field.name] = (values || {})[field.name] || ''
			return acc
		}, {})
	const [
		formValues,
		setFormValues,
	] = useState(initialValues)
	const getFieldProps = () => {
		return {
			onChange(e) {
				const name = e.target.name
				const value = e.target.value
				if (!name) {
					console.error(e.target)
					throw Error('name not set')
				}
				console.debug('onChange', { name, value })
				setFormValues({
						...formValues,
						[name]: value,
					},
				)
			},
		}
	}
	const doOnSubmit = e => {
		e.preventDefault()
		console.debug('onSubmit', formValues)
		luiFireEvent(props, 'onSubmit', formValues)
	}
	useEffect(
		() => {
			setFormValues(initialValues)
		},
		Object.values(initialValues),
	)
	return (
		<form onSubmit={doOnSubmit} className="luiForm">
			{
				(fields || defaultFields).map((field, key) => {
					field.type || (
						field.type = LuiFormSettings.defaultInputType
					)
					const typeProps = {
						...field,
					}
					typeProps.value = formValues[typeProps.name]
					typeProps.label || (
						typeProps.label = typeProps.name
					)
					typeProps.className || (
						typeProps.className = ''
					)
					typeProps.required = typeProps.required !== false
					delete typeProps.type
					return (
						<div className="luiFormInput" key={key}>
							<div className="luiForm_field_title">{typeProps.label}</div>
							<div className="luiForm_field_input">
								<field.type
									{...getFieldProps(typeProps.name)}
									{...typeProps}/>
							</div>
						</div>
					)
				})
			}
			<div className="luiForm_buttons">
				{
					(buttons || defaultButtons).map(
						(button, key) => {
							const Com = button.type || LuiFormSettings.defaultButtonType
							return (
								<Com className="luiForm_button"
									 type={button.type}
									 key={key}>{button.text}</Com>
							)
						},
					)
				}
			</div>
		</form>
	)
}
