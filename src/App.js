import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify'

import Header from './Header'
import Restaurants from './Restaurants'
import CreateRestaurant from './CreateRestaurant'
import CreateReview from './CreateReview'
import Reviews from './Reviews'
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'

class App extends Component {
  state = {
    restaurants: [],
    selectedRestaurant: {},
    showCreateRestaurant: false,
    showCreateReview: false,
    showReviews: false
  }
  async componentDidMount() {
    try {
      const rdata = await API.graphql(graphqlOperation(queries.listRestaurants))
      const { data: { listRestaurants: { items }}} = rdata
      console.log('items: ', items)
      this.setState({ restaurants: items })
    } catch(err) {
      console.log('error: ', err)
    }
  }
  viewReviews = (r) => {
    this.setState({ showReviews: true, selectedRestaurant: r })
  }
  createRestaurant = async(restaurant) => {
    this.setState({
      restaurants: [...this.state.restaurants, restaurant]
    })
    try {
      await API.graphql(graphqlOperation(
        mutations.createRestaurant,
        {input: restaurant}
      ))
    } catch(err) {
      console.log('error creating restaurant: ', err)
    }
  }
  createReview = async(id, input) => {
    const restaurants = this.state.restaurants
    const index = restaurants.findIndex(r => r.id === id)
    restaurants[index].reviews.items.push(input)
    this.setState({ restaurants })
    await API.graphql(graphqlOperation(mutations.createReview, {input}))
  }
  closeModal = () => {
    this.setState({
      showCreateRestaurant: false,
      showCreateReview: false,
      showReviews: false,
      selectedRestaurant: {}
    })
  }
  showCreateRestaurant = () => {
    this.setState({ showCreateRestaurant: true })
  }
  showCreateReview = r => {
    this.setState({ selectedRestaurant: r, showCreateReview: true })
  }
  render() {
    return (
      <div>
        <Header showCreateRestaurant={this.showCreateRestaurant} />
        <Restaurants
          restaurants={this.state.restaurants}
          showCreateReview={this.showCreateReview}
          viewReviews={this.viewReviews}
        />
        {
          this.state.showCreateRestaurant && (
            <CreateRestaurant
              createRestaurant={this.createRestaurant}
              closeModal={this.closeModal}   
            />
          )
        }
        {
          this.state.showCreateReview && (
            <CreateReview
              createReview={this.createReview}
              closeModal={this.closeModal}   
              restaurant={this.state.selectedRestaurant}
            />
          )
        }
        {
          this.state.showReviews && (
            <Reviews
              selectedRestaurant={this.state.selectedRestaurant}
              closeModal={this.closeModal}
              restaurant={this.state.selectedRestaurant}
            />
          )
        }
      </div>
    );
  }
}

export default App