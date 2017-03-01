import React, { Component } from 'react'

import Messages from './Messages'
import Navigation from './Navigation'
import Basket from './Basket'
import List from './List'

import '../styles/App.css'

class App extends Component {

  constructor() {
    super()

    this.addToBasket = this.addToBasket.bind(this)
    this.removeFromBasket = this.removeFromBasket.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.addNotification = this.addNotification.bind(this)
    this.removeNotification = this.removeNotification.bind(this)

    this.state = {
      colors: {},
      basket: [],
      notifications: [],
      searchQuery: ''
    }
  }

  componentWillMount() {
    // promise for color data
    const fetchColors = fetch('http://localhost:3000/colors.json') 
    // reference for local basket
    const localStorageRef = localStorage.getItem('basket')
    // update state from local basket
    if (localStorageRef) {
      this.setState({
        basket: JSON.parse(localStorageRef)
      })
    }
    // handle promise of color data and update state if the promise resolves
    fetchColors
      .then(response => {
        return response.json()
      })
      .then(colors => {
        this.setState({ colors })
      })
      .catch(error => {
        console.error(error)
      })
  }

  componentWillUpdate(nextProps, nextState) {
    // update local basket
    localStorage.setItem('basket', JSON.stringify(nextState.basket))
  }

  addNotification({title, body, type = 'warning'}) {
    const notifications = this.state.notifications
    const timestamp = Date.now()
    // create notification object
    const newNotification = {
      title,
      body,
      type,
      timestamp
    }
    // update state with new notification
    notifications.push(newNotification)
    this.setState({ notifications })
    // que the notification to be removed
    this.removeNotification()
  }

  removeNotification() {
    const notifications = this.state.notifications
    // remove the last added notification and update state
    setTimeout(() => {
      notifications.shift()
      this.setState({ notifications })
    }, 5000)
  }

  addToBasket(id) {
    const basket = [...this.state.basket]
    // is the color already in the basket
    const alreadyInBasket = basket.find(basketId => basketId === id)
    // ...if yes, add a notification and return
    if (alreadyInBasket) { 
      this.addNotification({
        title: 'Already in basket',
        body: `${this.state.colors[id].name} is already in the basket`
      })
      return
    }
    // ...else update state with the new basket
    basket.push(id)
    this.setState({ basket })
  }

  removeFromBasket(id) {
    const basket = [...this.state.basket]
    const idIndex = basket.indexOf(id)
    // find the color in basket and destructure it out of there! ...then update state
    const updatedBasket = [...basket.slice(0,idIndex), ...basket.slice(idIndex + 1)]
    this.setState({ basket: updatedBasket })
  }

  handleSearch(searchValue) {
    // update state with search query
    this.setState({ searchQuery: searchValue })
  }

  render() {
    return (
      <div className="App">
        <Messages notifications={ this.state.notifications } />
        <Navigation searchQuery={ this.state.searchQuery } handleSearch={ this.handleSearch } />
        <Basket basket={ this.state.basket } colors={this.state.colors} removeFromBasket={this.removeFromBasket } />
        <List colors={ this.state.colors } searchQuery={ this.state.searchQuery } addToBasket={this.addToBasket} />
      </div>
    );
  }
}

export default App
