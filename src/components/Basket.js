import React, { Component } from 'react'
import '../styles/Basket.css'

import BasketCard from './BasketCard'

class Basket extends Component {
  render() {
    const { basket, colors } = this.props

    return (
      <div className="Basket">
        {
          basket.map(id => <BasketCard color={ colors[id] } index={ id } removeFromBasket={this.props.removeFromBasket} key={ id } />) 
        }
      </div>
    )
    
  }
}

export default Basket