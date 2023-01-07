export const increment = () => {
	return {
		type: 'INCREMENT',
	};
};
export const decrement = () => {
	return {
		type: 'DECREMENT',
	};
};
export const add = (add) => {
	return {
		type: 'ADD',
		payload: add,
	};
};
export const sub = (sub) => {
	return {
		type: 'SUBTRACT',
		payload: sub,
	};
};
