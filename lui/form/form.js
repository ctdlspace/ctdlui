/**
 * Allows to build typical forms
 * @module Form
 * @author rusinozemtsev
 * @version 0.1.0
 */

/**
 * @typedef     {object}     FormField
 * @property    {string}     name
 * @property    {function}   [type] react component for type
 * @property    {string}     [label]
 * @property    {boolean}    [required] default: true
 * @property    {object}     [options]
 */


/**
 * @typedef     {object}     FormButton
 * @property    {string}     name
 * @property    {function}   [type] button type. default: submit
 * @property    {string}     [text]
 * @property    {boolean}    [required]
 */

import React, { useState, useEffect } from 'react'
import './form.less'

const FormDefaultInputType = props => {
	return (
		<input {...props} type={'text'}/>
	)
}

const FormDefaultButtonType = props => {
	return (
		<button {...props} type={'submit'}>{props.children}</button>
	)
}

/**
 * Form Settings
 * @type {{defaultInputType: (function(*): *), defaultButtonType: (function(*): *)}}
 */
export const LuiFormSettings = {
	defaultInputType: FormDefaultInputType,
	defaultButtonType: FormDefaultButtonType,
}

/**
 * Form
 * @param {object} props
 * @param {{[string]: *}} props.values
 * @param {[FormField]} props.fields
 * @param {[FormButton]} props.buttons
 * @param {boolean} props.debug
 * @param {function} props.onSubmit
 * @returns {*}
 */
export const LuiForm = props => {

	const {
		onSubmit,
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
		(acc, field) => {
			acc[field.name] = (values || {})[field.name] || ''
			return acc
		}, {},
	)

	const [
		formValues,
		setFormValues,
	] = useState(initialValues)

	const getFieldProps = () => {
		return {
			onChange(e) {
				const name = e.target.name
				const value = e.target.value
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
		onSubmit && props.onSubmit({
			sourceEvent: e,
			target: {
				value: formValues,
			},
		})
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

					delete typeProps.type

					typeProps.value = formValues[typeProps.name]

					typeProps.label || (
						typeProps.label = typeProps.name
					)

					typeProps.className || (
						typeProps.className = ''
					)

					typeProps.required = typeProps.required !== false

					return (
						<div className="luiForm_field" key={key}>
							<div className="luiForm_field_title">{typeProps.label}</div>
							<div className="luiForm_field_input">
								<field.type
									{...getFieldProps(typeProps.name)}
									{...typeProps}
								/>
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
