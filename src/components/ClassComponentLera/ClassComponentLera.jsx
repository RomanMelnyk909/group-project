import { Component } from "react";

class ClassComponentLera extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 14, price: 332}
	}
	onClickHandler() {
		this.setState((previousState) => {
			return {...previousState, count: previousState.count + 1}
		})
	}
	render() {
		const { name, age } = this.props;
		return (
			<div>
				<div>{`Props ${name}, ${age}`}</div>
			<button onClick={this.onClickHandler.bind(this)}>Button</button>
			<div>{this.state.count}</div>
			</div>
		)
	}
}

export default ClassComponentLera;