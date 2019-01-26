import React, { Component } from 'react';
import './App.css';

import { API, graphqlOperation } from 'aws-amplify'

import Header from './Header'
import Restaurants from './Restaurants'
import CreateRestaurant from './CreateRestaurant'
import CreateReview from './CreateReview'
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'

class App extends Component {
  state = {
    restaurants: [],
    showCreateRestaurant: false,
    showCreateReview: true
  }
  async componentDidMount() {
    try {
      const rdata = await API.graphql(graphqlOperation(queries.listRestaurants))
      const { data: { listRestaurants: { items }}} = rdata
      this.setState({ restaurants: items })
    } catch(err) {
      console.log('error: ', err)
    }
  }
  createRestaurant = async(restaurant) => {
    this.setState({
      restaurants: [...this.state.restaurants, restaurant]
    })
    try {
      await API.graphql(graphqlOperation(mutations.createRestaurant, {input: restaurant}))
      console.log('successfully created restaurant')
    } catch(err) {
      console.log('error creating restaurant: ', err)
    }
  }
  closeModal = () => {
    this.setState({
      showCreateRestaurant: false
    })
  }
  showCreateRestaurant = () => {
    this.setState({ showCreateRestaurant: true })
  }
  showCreateReview = (r) => {
    this.setState({ showCreateReview: true })
    console.log('')
  }
  render() {
    return (
      <div>
        <Header showCreateRestaurant={this.showCreateRestaurant} />
        <Restaurants
          restaurants={this.state.restaurants}
          showCreateReview={this.showCreateReview}
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
            />
          )
        }
      </div>
    );
  }
}

export default App