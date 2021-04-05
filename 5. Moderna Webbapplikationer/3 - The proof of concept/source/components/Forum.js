import React, { Component } from "react";
import MyContext from "./MyContext";
import Axios from "axios";
const server = "http://localhost:3000/";
import { Link } from "react-router-dom";

export default class Forum extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      loading: true,
      threads: [],
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    try {
      const posts = await Axios.get(server + "forum");
      if (this._isMounted) {
        this.setState(
          {
            loading: false,
            threads: posts.data,
          },
          () => {}
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onChange = (e) => {
    if (this._isMounted) {
      this.setState(
        {
          [e.target.name]: [e.target.value],
        },
        () => {}
      );
    }
  };

  submit = async (e) => {
    e.preventDefault();
    await Axios.post(server + "forum", {
      title: this.state.inputValue,
      author: this.context.currentUser.name,
      comments: [],
    });

    let updateThreads = await Axios.get(
      server + "forum?title=" + this.state.inputValue
    );
    if (this._isMounted) {
      this.setState({
        threads: [...this.state.threads, updateThreads.data[0]],
        inputValue: "",
      });
    }
  };

  render() {
    return (
      <MyContext.Consumer>
        {(value) => {
          return this.state.loading ? (
            <div>not laoded yet</div>
          ) : (
            <div>
              <form onSubmit={this.submit}>
                <input
                  type="text"
                  value={this.state.inputValue}
                  name="inputValue"
                  onChange={this.onChange}
                ></input>
                <input type="submit" value="Add Topic" />
              </form>
              <ul style={{ padding: "0px", margin: "0px" }}>
                {this.state.threads.map((thread) => {
                  return (
                    <li key={thread.id} style={liStyles}>
                      <Link to={`topic/${thread.id}`}>
                        {" "}
                        {thread.title}
                        {`   <Av: ${thread.author}>`}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
const liStyles = {
  width: "50%",
  listStyleType: "none",
  padding: "0px",
  margin: "5px 0px",
  borderStyle: "outset",
  textAlign: "center",
};
Forum.contextType = MyContext;
