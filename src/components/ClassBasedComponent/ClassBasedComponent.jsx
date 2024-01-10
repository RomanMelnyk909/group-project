import { Component } from "react";

class ClassBasedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 14, price: 332 }
    }

    onClickHandler() {
        this.setState((previousState) => {
            return { ...previousState, count: previousState.count + 1}
        });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(resp => {
                this.setState((prevState) => ({
                    ...prevState,
                    users: resp
                }))
            })
    }

    render() {
        const { name, age } = this.props;
        console.log(this.state)
        return (
            <div>
                <div>{`Props ${name} ,  ${age}`}</div>
                <button onClick={this.onClickHandler.bind(this)} >Button </button>
                <div> { this.state.count } </div>
                { this.state?.users?.map(user => (<div>{user?.name}</div>)) }
            </div>
        );
    }
}

export default ClassBasedComponent;
