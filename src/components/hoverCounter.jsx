import React from 'react'
import higherOrderComponent from './higherOrderComponent'

function HoverCounter({ counter, incFunc }) {
	return (
		<>
			<button onMouseOver={incFunc}>Hover Me!-{counter}</button>
		</>
	)
}
export default higherOrderComponent(HoverCounter)
