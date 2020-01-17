import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CRUD from "./CRUD";
import { createBrowserHistory } from "history";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      name: "",
      comment: "",
      rating: 4,
      option: "option1",
      check: "check1"
    };
  }

  changeValue(event, type) {
    if (type === "input") {
      this.setState({
        name: event.target.value
      });
    } else if (type === "textarea") {
      this.setState({
        comment: event.target.value
      });
    } else if (type === "rating") {
      this.setState({
        rating: event.target.value
      });
    } else if (type === "submit") {
      console.log(this.state);
      event.preventDefault();
    } else if (type === "option") {
      console.log("------" + event.target.value);
      this.setState({
        option: event.target.value
      });
    } else if (type === "check") {
      console.log("------" + event.target.value);
      this.setState({
        check: event.target.value
      });
    }
  }

  render() {
    return (
      /*
      <div className="App">
        <CRUD />
      </div>
      */

      <>
        <div className="container">
          <form>
            <div>
              <label htmlFor="usr">Name:</label>
              <input
                placeholder="react"
                type="text"
                value={this.state.name}
                className="form-control"
                id="usr"
                onChange={event => this.changeValue(event, "input")}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="comment">Comment:</label>
              <textarea
                placeholder="UI"
                className="form-control"
                rows="5"
                id="comment"
                value={this.state.comment}
                onChange={event => this.changeValue(event, "textarea")}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="sel1">Select list:</label>
              <select
                className="form-control"
                id="sel1"
                value={this.state.rating}
                onChange={event => this.changeValue(event, "rating")}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="option1"
                checked={this.state.option === "option1"}
                name="exampleRadios"
                id="exampleRadios1"
                onChange={event => this.changeValue(event, "option")}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="option2"
                checked={this.state.option === "option2"}
                name="exampleRadios"
                id="exampleRadios2"
                onChange={event => this.changeValue(event, "option")}
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Second default radio
              </label>
            </div>
            <div className="form-check disabled">
              <input
                className="form-check-input"
                type="radio"
                value="option3"
                checked={this.state.option === "option3"}
                name="exampleRadios"
                id="exampleRadios3"
                onChange={event => this.changeValue(event, "option")}
              />
              <label className="form-check-label" htmlFor="exampleRadios3">
                third radio
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
                value="check1"
                checked={this.state.check === "check1"}
                onChange={event => this.changeValue(event, "check")}
              ></input>
              <label className="form-check-label" htmlFor="defaultCheck1">
                first checkbox
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
                value="check2"
                checked={this.state.check === "check2"}
                onChange={event => this.changeValue(event, "check")}
              ></input>
              <label className="form-check-label" htmlFor="defaultCheck2">
                second checkbox
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck3"
                value="check3"
                checked={this.state.check === "check3"}
                onChange={event => this.changeValue(event, "check")}
              ></input>
              <label className="form-check-label" htmlFor="defaultCheck3">
                Third checkbox
              </label>
            </div>

            <button
              onClick={event => this.changeValue(event, "submit")}
              type="submit"
              className="btn-warning"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default App;
