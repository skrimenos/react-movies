import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState({ type: event.target.dataset.type });
  };

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="search"
                type="text"
                className="validate"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyPress={this.handleKey}
              />
              <button
                className="btn search-btn"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.searchMovies(this.state.search);
                }}
              >
                Search
              </button>
            </div>
            <div>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="all"
                  onChange={this.handleFilter}
                  checked={this.state.type === "all"}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="movie"
                  onChange={this.handleFilter}
                  checked={this.state.type === "movie"}
                />
                <span>Movies</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="series"
                  onChange={this.handleFilter}
                  checked={this.state.type === "series"}
                />
                <span>Series</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export { Search };
