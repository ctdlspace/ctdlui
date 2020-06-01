import React from 'react'
import mime from 'mime'
import unknownMimeIcon from './unknown_mime.svg'
import { luiCls } from '../../helpers'
import './thumbnail.less'

const unknownMimeSrc = 'data:image/svg+xml,%3Csvg id=\'_x31_\' enable-background=\'new 0 0 24 24\' height=\'512\' viewBox=\'0 0 24 24\' width=\'512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'m20.5 24h-12c-1.378 0-2.5-1.121-2.5-2.5v-15c0-1.379 1.122-2.5 2.5-2.5h12c1.378 0 2.5 1.121 2.5 2.5v15c0 1.379-1.122 2.5-2.5 2.5zm-12-19c-.827 0-1.5.673-1.5 1.5v15c0 .827.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5z\'/%3E%3Cpath d=\'m4.5 21h-1c-1.378 0-2.5-1.121-2.5-2.5v-16c0-1.379 1.122-2.5 2.5-2.5h12c1.378 0 2.5 1.121 2.5 2.5 0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-.827-.673-1.5-1.5-1.5h-12c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5h1c.276 0 .5.224.5.5s-.224.5-.5.5z\'/%3E%3Cpath d=\'m18.5 17h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z\'/%3E%3Cpath d=\'m18.5 21h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z\'/%3E%3Cpath d=\'m18.5 13h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z\'/%3E%3Cpath d=\'m18.5 9h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z\'/%3E%3C/svg%3E'

/**
 * Avatar
 * @param props
 * @param props.src
 * @param [props.alt]
 * @param [props.rounded]
 * @param [props.micro]
 */
export function LuiThumbnail(props) {
	const images = [
		'image/jpeg',
		'image/png',
	]
	const mimeType = mime.getType(props.src?.split('?')[0])
	const src = images.includes(mimeType) ? props.src : unknownMimeSrc
	return (
		<div {...luiCls('luiThumbnail', props)}>
			<img src={src} alt={props.alt}/>
		</div>
	)
}
