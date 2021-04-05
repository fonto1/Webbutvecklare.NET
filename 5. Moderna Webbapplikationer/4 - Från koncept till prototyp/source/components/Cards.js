import React, { Component } from "react";
import PropTypes from "prop-types";
import MyContext from "./MyContext";

class Cards extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(value) => {
          const { image, name, age, likes, id } = this.props.currentDog;
          const { cardsInputHandler } = value;

          return (
            <div>
              <div style={boarderStyle} className="card">
                <div className="row">
                  <div className="col-sm-12 col-md-6 d-flex">
                    <img id="mePic" src={image} alt="" style={imgStyle} />
                  </div>
                  <div className="col-sm-12 col-md-6 d-flex">
                    <div style={cardStyle} className="card-body">
                      <div className="row" style={infoRow} id={id}>
                        <div className="col-12">
                          <label style={labelStyle}>Name</label>
                          <input
                            style={inputStyle}
                            type="text"
                            value={name}
                            onChange={cardsInputHandler}
                            name="name"
                          />
                        </div>
                        <div className="col-12">
                          <label style={labelStyle}>Age</label>
                          <input
                            style={inputStyle}
                            type="text"
                            value={age}
                            onChange={cardsInputHandler}
                            name="age"
                          />
                        </div>
                        <div className="col-12">
                          <label style={labelStyle}>Likes</label>
                          <input
                            style={inputStyle}
                            type="text"
                            value={likes}
                            onChange={cardsInputHandler}
                            name="likes"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

const imgStyle = {
  width: "100%",
};

const infoRow = {
  margin: "2rem 0,5rem",
};

const labelStyle = {
  // marginRight: "10px",
  width: "50px",
};

const inputStyle = {
  width: "85%",
  marginBottom: "10px",
  padding: "5px",
};

const boarderStyle = {
  width: "60%",
  margin: "20px auto",
};

const cardStyle = {
  // marginTop: "25px",
  // marginLeft: "-30px",
  // marginTop: "10%",
};

Cards.propTypes = {
  currentDog: PropTypes.object,
};

export default Cards;
