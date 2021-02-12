import React from 'react'
import logo from './logo.svg'
import './App.css'

function App(): React.ReactElement {
	React.useEffect(() => {
		const test = () => {
			console.debug('start load ...')

			try {
				const messages = window.api.send()
				console.debug(`success send api | message: ${messages}`)
			} catch (e) {
				// cannot call window.api without electron
				console.debug('error: load failed')
			}
		}
		test()
	}, [])

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
