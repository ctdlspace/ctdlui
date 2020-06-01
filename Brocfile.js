const { Funnel } = require('broccoli-funnel')

import babel from 'broccoli-babel-transpiler'
import merge from 'broccoli-merge-trees'
import concat from 'broccoli-concat'

const root = 'src'
const exclude = []

const scriptsFunnel = new Funnel(root, {
	include: ['**/*.js'],
	exclude,
})

const css = concat(root, {
	outputFile: '/index.css',
	inputFiles: ['**/*.css'],
	sourceMapConfig: { enabled: true },
	allowNone: false | true // defaults to false, and will error if trying to concat but no files are found.
})

const scripts = babel(scriptsFunnel)

export default () => merge(
	[scripts, css], 
	{ overwrite: true }
)
