import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer" className="text-center fixed-bottom">
        <img
          src="images.jpg"
          className="img-fluid"
          alt="Responsive image"
          className="rounded mx-auto d-block"
        />
      </div>
    );
  }
}
