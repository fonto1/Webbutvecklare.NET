import React, { Component } from "react";
import Axios from "axios";
const server = "http://localhost:3000/";
import MyContext from "../components/MyContext";
import { Comment } from "../classes/Comment";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";

export default class TopicDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      thread: "",
      loading: true,
      inputValue: "",
    };
  }

  async componentDidMount() {
    const response = await Axios.get(
      server + "forum/" + this.props.match.params.id
    );

    const thread = response.data;
    this.setState(
      {
        thread: thread,
        loading: false,
        user: this.context.currentUser.name,
      },
      () => {}
    );
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getTime = () => {
    let newDate = new Date();
    let date = ("0" + newDate.getDate()).slice(-2);
    let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let hour = ("0" + newDate.getHours()).slice(-2);
    let minutes = ("0" + newDate.getMinutes()).slice(-2);
    let seconds = ("0" + newDate.getSeconds()).slice(-2);

    let year = newDate.getFullYear();
    let finalTime = `${year}-${month}-${date} ${hour}:${minutes}:${seconds}`;
    return finalTime;
  };

  submit = (e) => {
    e.preventDefault();
    let time = this.getTime();
    const newComment = new Comment(
      this.state.user,
      this.state.inputValue,
      time
    );

    this.setState(
      (prevState) => ({
        thread: {
          ...prevState.thread,
          comments: [...prevState.thread.comments, newComment],
        },
        inputValue: "",
      }),
      () => {
        Axios({
          method: "put",
          url: server + "forum/" + this.props.match.params.id,
          data: this.state.thread,
        });
      }
    );
  };

  render() {
    return (
      <MyContext.Consumer>
        {(value) => {
          return this.state.loading ? (
            <div>loading</div>
          ) : (
            <div
              className="container"
              style={{ margin: "0px", padding: "0px" }}
            >
              <Jumbotron>
                <div className="text-center">
                  <h1 className="text-center">{this.state.thread.title}</h1>

                  <p>Created by: {this.state.thread.author}</p>

                  <Link to="/">
                    <button className="btn btn-danger">Return</button>
                  </Link>
                </div>
              </Jumbotron>
              <ul style={{ margin: "15px 0px", padding: "0px" }}>
                {this.state.thread.comments.map((comment) => {
                  return (
                    <li key={comment.id} style={liStyles}>
                      {comment.time}
                      <br></br>
                      {comment.user} <br></br>
                      {comment.text}
                    </li>
                  );
                })}
              </ul>
              <form onSubmit={this.submit}>
                <input
                  type="text"
                  value={this.state.inputValue}
                  name="inputValue"
                  onChange={this.onChange}
                ></input>
                <input type="submit" value="Submit" />
              </form>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

const liStyles = {
  listStyleType: "none",
  padding: "0px",
  margin: "0px 0px",
  borderStyle: "outset",
};

TopicDetail.contextType = MyContext;
