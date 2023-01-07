import React from 'react'

export default function ClickCounter({ count, increment }) {
	return (
		<div>
			<button onClick={increment}>Click Me!-{count}</button>
		</div>
	)
}
