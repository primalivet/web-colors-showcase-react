import React, { Component } from 'react'
import '../styles/Card.css'

class Card extends Component {
  render() {
    const { color } = this.props
    return (
      <div className="Card" style={{ background: color.name }} onClick={() => this.props.addToBasket(this.props.id)}>
        <div className="Card-text">
          <span className="Card-text-label">{ color.name }</span>
          <span className="Card-text-value Card-text-value--hex">HEX: <strong>{ `#${color.hex}` }</strong></span>
          <span className="Card-text-value Card-text-value--rgb">RGB: <strong>{ color.rgb.green },{ color.rgb.red },{ color.rgb.blue }</strong></span>
        </div>
      </div>
    )
  }
}

export default Card