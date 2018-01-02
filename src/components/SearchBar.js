import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast of your favorite cities"
          className="form-control"
          onChange={this.onInputChange}
          value={this.state.term}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
