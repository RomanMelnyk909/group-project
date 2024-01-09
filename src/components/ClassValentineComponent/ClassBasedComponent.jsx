import { Component } from "react";

class ClassBasedComponent extends Component {
    constructor() {
        super();
    }

    onClickHandler() {
        console.log("click")
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickHandler()}>Button</button>
                <div> Class Based Component </div>
            </div>
        )
    }
}