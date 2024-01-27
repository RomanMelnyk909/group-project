import { PRODUCTS_LIST_ENDPOINT } from "../../constants/endpoints";
import { Component } from "react";
import { createRequestPath } from "../../helpers/helpers";


class ClassBasedJulia extends Component {
    constructor(props) {
      super(props);
      this.state = {
        products: [],
        error: null,
      };
    }
  
    componentDidMount() {
      fetch(createRequestPath(PRODUCTS_LIST_ENDPOINT))
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          this.setState({
            products: data,
          });
        })
        .catch((error) => {
          this.setState({
            error: "Failed to fetch data",
          });
        });
    }
  
    render() {
      const { products } = this.state;
  
      return (
        <div>
          <h3>Products</h3>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id}>
                <p>{product.name}</p>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      );
    }
  }

export default ClassBasedJulia;
