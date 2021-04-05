import React, { Component } from "react";
import MyContext from "./MyContext";
import Axios from "axios";
import { Carousel } from "react-bootstrap";
const server = "http://localhost:3000/";

export default class AnnounceBoard extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      event: [],
      loading: true,
      eventNameField: "",
      date: "",
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    const data = await Axios.get(server + "events");
    if (this._isMounted) {
      this.setState(
        {
          event: data.data,
          loading: false,
        },
        () => {}
      );
    }
  }

  sortEvent = () => {
    let events = this.state.event.sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }
      return 0;
    });

    return events;
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  show = () => {};

  onchange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {}
    );
  };

  submit = async (e) => {
    e.preventDefault();
    let src = "";
    if (this.state.event.length % 2 == 0) {
      src = "./source/friends.jpg";
    } else {
      src = "./source/tippo.jpg";
    }

    if (this.state.eventNameField && this.state.date) {
      await Axios.post(server + "events", {
        name: this.state.eventNameField,
        date: this.state.date,
        user: this.context.currentUser.name,
        src: src,
      });

      const eventUpdate = await Axios.get(server + "events");

      this.setState(
        {
          eventNameField: "",
          date: "",
          event: eventUpdate.data,
        },
        () => {}
      );
    }
  };

  render() {
    let events = this.sortEvent();

    return this.state.loading ? (
      <div></div>
    ) : (
      <div>
        <form onSubmit={this.submit}>
          <div className="row">
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={this.state.eventNameField}
                name="eventNameField"
                onChange={this.onchange}
              />
            </div>
            <div className="col-4">
              <input
                type="date"
                className="form-control"
                placeholder="Date"
                value={this.state.date}
                name="date"
                onChange={this.onchange}
              />
            </div>
            <div className="col-5 ">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>

        <h1 className="display-4 text-center">Upcoming Events</h1>
        <Carousel>
          {events.map((day) => {
            return (
              <Carousel.Item key={day.id}>
                <img
                  className="d-block w-50 rounded mx-auto"
                  src={day.src}
                  alt={day.name}
                />

                <Carousel.Caption>
                  <div style={Style}>
                    <h3>{day.name}</h3>
                    <p>
                      {day.date} // {day.user}
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

AnnounceBoard.contextType = MyContext;

const Style = {
  textAlign: "center",
  color: "yellow",
};
