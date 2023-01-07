import React from 'react'

export default function HoverCounter({ count, increment }) {
	return (
		<div>
			<button onMouseOver={increment}>Hover Me!-{count}</button>
		</div>
	)
}
