import React from 'react'

const higherOrderComponent = (OriginalComponent) => {
	const HigherOrder = () => {
		const [counter, setCounter] = React.useState(0)
		const increment = () => {
			setCounter(counter + 1)
		}
		return <OriginalComponent incFunc={increment} counter={counter} />
	}
	return HigherOrder
}
export default higherOrderComponent
