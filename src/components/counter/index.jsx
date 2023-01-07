import React from 'react'

export default function Counter(props) {
	const [count, setCount] = React.useState(0)
	const increment = () => {
		setCount(count + 1)
	}
	return <div>{props.render(count, increment)}</div>
}
