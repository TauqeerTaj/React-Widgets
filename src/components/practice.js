import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import * as actionCreators from './store/actions/actions';

class practice extends Component {
	render() {
		return (
			<div>
				<Row>
					<Col lg={12} className='text-center mb-5 bg-warning'>
						{this.props.ctr}
					</Col>
					<Col lg={3} md={3}>
						<button onClick={this.props.onIncrement}>Increment</button>
					</Col>
					<Col lg={3} md={3}>
						<button onClick={this.props.onDecrement}>Decrement</button>
					</Col>
					<Col lg={3} md={3}>
						<button onClick={() => this.props.onAdd(5)}>Add</button>
					</Col>
					<Col lg={3} md={3}>
						<button onClick={() => this.props.onSub(5)}>Subtract</button>
					</Col>
				</Row>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log('redux state:', state.counter);
	return {
		ctr: state.counter,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: () => dispatch(actionCreators.increment()),
		onDecrement: () => dispatch(actionCreators.decrement()),
		onAdd: (add) => dispatch(actionCreators.add(add)),
		onSub: (sub) => dispatch(actionCreators.sub(sub)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(practice);
