import React, { Component } from 'react'
import '../styles/Search.css'

class Search extends Component {
  render() {
    return (
      <input className="Search" type="search" placeholder="Search..." tabIndex="1" ref={(input) => { this.searchInput = input }} onChange={ () => {this.props.handleSearch(this.searchInput.value)} } />
    )
  }
}

export default Search