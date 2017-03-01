import React, { Component } from 'react'
import Card from './Card'
import '../styles/List.css'

class List extends Component {

  render() {

    let colorIds
    const { colors, searchQuery } = this.props
    // check if theres a search query, if yes filter the colors on that query
    if (searchQuery.length >= 1) {
      colorIds = Object.keys(colors).filter(id => {
        return colors[id].name.includes(searchQuery) || colors[id].group.includes(searchQuery)
      })
    } else {
      colorIds = Object.keys(colors).map(id => id)
    }

    return (
      <div className="List">
        { 
          colorIds.map(id => <Card color={ colors[id] } id={ id } addToBasket={this.props.addToBasket} key={ id } />)
        }
      </div>
    )
  }
}

export default List