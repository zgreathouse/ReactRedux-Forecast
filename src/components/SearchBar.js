import React, { Component } from 'react';
import { connect } from 'react-redux'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.input})
  }

  handleSubmit(event) {
    event.preventDefault();
    //Fetch weather data
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-secondary"
          >
            Submit
          </button>
        </span>
      </form>
    )
  }
}

// const mapStateToProps = (state) => ({
//
// })

// export default connect(mapStateToProps)(SearchBar);
export default SearchBar;
