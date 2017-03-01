import React, { Component } from 'react'
import '../styles/Message.css'

import { formatTime } from '../helpers'

class Message extends Component {
  render() {
    const { message } = this.props
    return (
      <div className={`Message Message-${message.type}`}>
        <span className="Message-icon"></span>
        <span className="Message-text">
          <strong className="Message-title">{ message.title }</strong>
          <span className="Message-body">{ message.body }</span>
        </span>
        <span className="Message-time">{ formatTime(message.timestamp) }</span>
      </div>
    )
  }
}

export default Message
