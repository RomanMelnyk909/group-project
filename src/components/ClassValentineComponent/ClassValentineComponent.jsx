import { Component } from "react";
import { createRequestPath } from "../../helpers/helpers";
import { CARTEGORIES_LIST_ENDPOINT } from "../../constants/endpoints";


class ClassValentineComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // count: 14, 
            // price: 12332,
            prod: [],
        };
    }

    // onClickHandler() {
    //     console.log("click")
    //     this.setState((previousState) => {
    //         return {...previousState, count: previousState.count + 1}
    //     });
    // }

    componentDidMount() {
        fetch(createRequestPath(CARTEGORIES_LIST_ENDPOINT))
            .then((response) => response.json())
            .then((resp) => {
                // this.setState((prevState) => ({
                //     ...prevState,
                //     users: resp
                // }))
                this.setState({
                    prod: resp,
                });
            })
            .catch((error) => {
                console.error("Error", error);
              });
    }

    render() {
        // const { count } = this.state;
        // console.log(this.state);
        const { prod } = this.state;
        return (
            <div>
                {/* <button onClick={this.onClickHandler.bind(this)}>Button</button>
                <div> {this.state.count} </div>
                { this.state?.users?.map(user => ( <div>{user?.name}</div> )) } */}

                <h2>Name Catedories</h2>
                {prod.map((data) => (
                    <h3 key={data.id}>{data.title}</h3>
                ))}

            </div>
        )
    }
}

export default ClassValentineComponent;