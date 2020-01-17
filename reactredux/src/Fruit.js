import React, { Component } from "react";
import "./Fruit.css";
class Fruit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: []
    };
  }

  componentDidMount() {
    this.props.ActionFruit(this.state.fruit);
  }

  render() {
    console.log("Fruit.js---------" + this.props.appData);
    const data = this.props.appData !== undefined ? this.props.appData : [];
    return (
      <ul className="fruitlist" style={{ listStyleType: "none" }}>
        {data.map(item => (
          <li>
            <span className="fruitBox">
              <img
                className="fruitBox-img"
                src={item.ImageURLs.Thumb}
                alt={item.Title}
              />

              <span className="fruitText">
                <h5> {item.Title} </h5>
              </span>
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default Fruit;
