import React, { Component } from "react";

export default class Search extends Component {
  state = { term: "" };

  onInputChanged = e => {
    console.log("changed", e.target.value);
    this.setState({ term: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui raised segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
          </div>
          <input
            value={this.state.term}
            onChange={this.onInputChanged}
            type="text"
            placeholder="YouTube Videos"
          />
        </form>
      </div>
    );
  }
}
