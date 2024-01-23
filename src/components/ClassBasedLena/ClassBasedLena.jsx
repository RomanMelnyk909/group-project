import { Component } from "react";
import { BLOGS_LIST_ENDPOINT } from "../../constants/endpoints";
import { createRequestPath } from "../../helpers/helpers";

class ClassBasedLena extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch(createRequestPath(BLOGS_LIST_ENDPOINT))
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>Blogs name:</h1>
        <ul>
          {users.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassBasedLena;
