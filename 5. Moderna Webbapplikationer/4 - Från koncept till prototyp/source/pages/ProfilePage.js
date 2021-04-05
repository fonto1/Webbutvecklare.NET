import React, { Component } from "react";
import Cards from "../components/Cards";
import MyContext from "../components/MyContext";

export default class Profile extends Component {
  renderCards = (value) => {
    {
      let { dogs } = value.currentUser;
      if (dogs !== undefined) {
        return dogs.map((dog) => <Cards key={dog.id} currentDog={dog} />);
      }
    }
  };

  render() {
    return (
      <MyContext.Consumer>
        {(value) => {
          const { addDog } = value;
          return (
            <div>
              <br />
              <div className="text-right">
                <button
                  onClick={addDog}
                  className="btn btn-danger btn-lg"
                  type="submit"
                >
                  Add Dogs
                </button>
              </div>{" "}
              <br />
              {this.renderCards(value)}
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
