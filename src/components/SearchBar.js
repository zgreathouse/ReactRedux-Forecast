import React, { Component } from 'react';
import { connect } from 'react-redux'

class SearchBar extends Component {
  render() {
    return (
      <form className="input-group">
        <input />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
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
