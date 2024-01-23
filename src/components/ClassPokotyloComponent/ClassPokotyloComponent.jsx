import { Component } from "react";
import { createRequestPath } from "../../helpers/helpers";
import { CARTEGORIES_LIST_ENDPOINT } from "../../constants/endpoints";
import './post.css';

class ClassBasedComponent extends Component {
    constructor({props}) {
        super(props);
        this.state={categories:[]};
    }

    componentDidMount() {    
            fetch(createRequestPath(CARTEGORIES_LIST_ENDPOINT))
                .then(response => response.json())
                .then(response => {
                    this.setState((prevState) => ({
                        ...prevState,
                       categories: response        
                    }))
                })
    }

    render() {
 
        return  <div className="post">
            <h2>Was rendered with Class</h2>
                  { 
                   this.state.categories.map( (el, index) => {
                    return  <div className="post-item">
                                <div><span>title: </span>{ el.title}</div>
                                <div><span>id: </span>{ el.id}</div>
                                <div><span>image: </span>{ el.image}</div>
                                <div><span>priority: </span>{ el.priority}</div>
                                <div><span>urlSlug: </span>{ el.urlSlug}</div>
                        </div>  
                  })                    
                   }
                </div>
                
               
        
    
}}
export default ClassBasedComponent;
