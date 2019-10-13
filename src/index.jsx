import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { createStore } from 'redux'

const initialData = {
	counter: 0
}
function getCounter(state) {
	return state.counter
}
function reducer(state, action) {
	if (action.type === 'INCREMENT') {
		state = {...state}
		state.counter += 1
	}
	return state
}
const store = createStore(reducer, initialData) 

function Hello() {
	const counter = useSelector(getCounter)
	console.log("rendering Hello")
	const [a, setA] = useState(0) 

	function text() {
		console.log("motherfucker")
		setA(a + 1)
	}

	return <div>
		fuck {a + counter}
		<button onClick={text}>пи</button>
		<Button/>
	</div>
} 

function Button() {
	console.log("rendering Button")
	const counter = useSelector(s => s.counter)
	const dispatch = useDispatch()
	return <button onClick={() => dispatch({ type: 'INCREMENT' })}>
		push me motherfucker
		{counter}
	</button>
}

ReactDOM.render(
	 <Provider store={store}>
	 	<Hello/>
	 </Provider>, document.body)
	