import './App.css'
import Counter from './components/counter'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

function App() {
	return (
		<div className="App">
			<Counter render={(count, increment) => <ClickCounter count={count} increment={increment} />} />
			<Counter render={(count, increment) => <HoverCounter count={count} increment={increment} />} />
		</div>
	)
}

export default App
