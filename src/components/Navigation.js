import React, { Component } from 'react'
import Search from './Search'
import '../styles/Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        <Search searchQuery={ this.props.searchQuery } handleSearch={ this.props.handleSearch } />
      </nav>
    )
  }
}

export default Navigation