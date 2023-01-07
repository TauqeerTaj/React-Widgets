const initialState = {
	counter: 0,
};
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				counter: state.counter + 1,
			};
		case 'DECREMENT':
			return {
				counter: state.counter - 1,
			};
		case 'ADD':
			return {
				counter: state.counter + action.payload,
			};
		case 'SUBTRACT':
			return {
				counter: state.counter - action.payload,
			};
		default:
			return {
				counter: state.counter,
			};
	}
	return state;
};
export default rootReducer;
