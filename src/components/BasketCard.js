import React, { Component } from 'react'
import '../styles/BasketCard.css'

class BasketCard extends Component {
  render() {
    
    const { color } = this.props

    // If colors diden't load yet
    if (color) {
    
      return (
        <div className="BasketCard" style={{ background: color.name }} tabIndex={10 + this.props.index} onClick={() => this.props.removeFromBasket(this.props.index)} >
          <div className="BasketCard-text">
            <span className="BasketCard-text-label">{ color.name }</span>
            <span className="BasketCard-text-value BasketCard-text-value--hex">HEX: <strong>{ `#${color.hex}` }</strong></span>
            <span className="BasketCard-text-value BasketCard-text-value--rgb">RGB: <strong>{ color.rgb.green },{ color.rgb.red },{ color.rgb.blue }</strong></span>
          </div>
        </div>
      )

    } else {
      
      return (
        <div className="BasketCard" style={{ background: 'grey' }}>
          <div className="BasketCard-text">
            <span className="BasketCard-text-label">loading...</span>
            <span className="BasketCard-text-value BasketCard-text-value--hex">HEX: <strong>??????</strong></span>
            <span className="BasketCard-text-value BasketCard-text-value--rgb">RGB: <strong>???,???,???</strong></span>
          </div>
        </div>
      )
      
    }
  }
}

export default BasketCard