import React, { Component } from 'react'
import '../styles/Messages.css'

import Message from './Message'

class Messages extends Component {
  render() {

    const notifications = this.props.notifications ||[]

    if (notifications && notifications.length >= 1) {
      return (
        <div className="Messages">
          {
            notifications.map((message, key) => <Message message={ message } key={ key } />)
          }
        </div>
      )
    } else {
      return false
    }
  }
}

export default Messages
