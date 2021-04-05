import React, { Component } from "react";
import Axios from "axios";
import "regenerator-runtime/runtime";
import MyContext from "./MyContext";
let link = "";
let count = "";

export default class ScrollList extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      image: false,
      selectedDog: null,
      id: null,
      loading: true,
      msg: "loading",
    };
  }

  onChangeHandler = (e) => {
    count = 1;
    let selected = this.context.extDatabase.find(
      (dog) => dog.name === e.target.value
    );
    this.setState(
      {
        image: false,
        selectedDog: selected,
        id: selected.id,
        loading: true,
        retry: true,
        msg: "loading",
      },
      () => {
        this.getImage();
      }
    );
  };

  checkImage = (url) => {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = () => resolve(true, url);
      img.onerror = () => reject(false);
      img.src = url;
    });
  };

  getImage = () => {
    Axios.get(
      `https://api.TheDogAPI.com/v1/images/search?api_key=e75704c5-83d7-44e5-9155-c086a94a0303&breed_ids=${this.state.id}`
    )
      .then((image) => {
        link = image.data[0].url;

        return this.checkImage(link);
      })
      .then(() => {
        this.setState(
          {
            image: link,
          },
          () => {}
        );
      })
      .catch((err) => {
        if (err === false) {
          this.setState({
            msg: "retry loading",
          });
          this.getImage();
        } else {
          this.setState({
            msg: "no image",
          });
          err;
        }
      });
  };

  render({ selectedDog, image } = this.state) {
    return (
      <MyContext.Consumer>
        {(value) => {
          const { extDatabase } = value;
          return (
            <div>
              <form>
                Select a Breed:
                <br />
                <select
                  id="mySelect"
                  onChange={(e, extDatabase) => {
                    this.onChangeHandler(e, extDatabase);
                  }}
                >
                  <option></option>
                  {extDatabase.map((dog) => (
                    <option key={dog.id} value={dog.name} id={dog.id}>
                      {dog.name}
                    </option>
                  ))}
                </select>
                {selectedDog ? (
                  <div>
                    {this.state.image ? (
                      <img src={image} style={{ width: "100%" }} />
                    ) : (
                      <h1>---{this.state.msg}---</h1>
                    )}
                    <ul id="selectUl">
                      <li>{selectedDog.bred_for}</li>
                      <li>{selectedDog.life_span}</li>
                      <li>{selectedDog.temperament}</li>
                      <li>{selectedDog.height.imperial}</li>
                      <li>{selectedDog.origin}</li>
                    </ul>
                  </div>
                ) : (
                  <div></div>
                )}
              </form>
              <div></div>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

ScrollList.contextType = MyContext;
