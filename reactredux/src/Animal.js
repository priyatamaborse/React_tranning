import React, { Component } from "react";
import "./Animal.css";
import Modal from "./Modal";
import ReactDOM from "react-dom";

class Animal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      show: false,
      url: ""
    };
  }

  componentDidMount() {
    this.props.ActionAnimal(this.state.animals);
  }
  showModal = url => {
    this.setState({ show: true, url: url }, () => {
      ReactDOM.render(
        <Modal
          handleClose={this.hideModal}
          show={this.state.show}
          data={{ url }}
        />,
        document.getElementById("popUpImage")
      );
    });
  };

  hideModal = () => {
    console.log("close called");
    this.setState({ show: false }, () => {
      ReactDOM.render(
        <Modal
          handleClose={this.hideModal}
          show={this.state.show}
          data={this.state.url}
        />,
        document.getElementById("popUpImage")
      );
    });
  };

  render() {
    console.log("Animal.js---------" + this.props.appData);
    const data = this.props.appData !== undefined ? this.props.appData : [];
    return (
      <>
        <ul className="animallist" style={{ listStyleType: "none" }}>
          {data.map(item => (
            <li>
              <span className="animalBox">
                <img
                  className="animalBox-img"
                  src={item.ImageURLs.Thumb}
                  alt={item.Title}
                  onClick={this.showModal.bind(this, item.ImageURLs.FullSize)}
                />

                <span className="animalText">
                  <h5> {item.Title} </h5>
                </span>
              </span>
              <div id="popUpImage"></div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Animal;
