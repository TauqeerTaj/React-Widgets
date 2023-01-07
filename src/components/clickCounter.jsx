import React from 'react'
import higherOrderComponent from './higherOrderComponent'

function clickCounter({ counter, incFunc }) {
	return (
		<>
			<button onClick={incFunc}>Click Me!-{counter}</button>
		</>
	)
}
export default higherOrderComponent(clickCounter)
