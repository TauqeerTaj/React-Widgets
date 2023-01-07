import React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as actionCreators from './store/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
export default function PracticeFunc() {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<div>
			<Row>
				<Col lg={12} className='text-center mb-5 mt-5 bg-warning'>
					{counter}
				</Col>
				<Col lg={3} md={3}>
					<button onClick={() => dispatch(actionCreators.increment())}>
						Increment
					</button>
				</Col>
				<Col lg={3} md={3}>
					<button onClick={() => dispatch(actionCreators.decrement())}>
						Decrement
					</button>
				</Col>
				<Col lg={3} md={3}>
					<button onClick={() => dispatch(actionCreators.add(5))}>Add</button>
				</Col>
				<Col lg={3} md={3}>
					<button onClick={() => dispatch(actionCreators.sub(5))}>
						Subtract
					</button>
				</Col>
			</Row>
		</div>
	);
}
