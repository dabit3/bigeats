import React from 'react'
import { css } from 'glamor'

class Reviews extends React.Component {
  render() {
    const { closeModal, restaurant } = this.props
    return (
      <div {...css(styles.overlay)}>
        <div {...css(styles.container)}>
          <h1>{restaurant.name}</h1>
          {
            restaurant.reviews.items.map((r, i) => (
              <div {...css(styles.review)} key={i}>
                <p {...css(styles.text)}>{r.text}</p>
                <p {...css(styles.rating)}>Stars: {r.rating}</p>
              </div>
            ))
          }
          <p onClick={closeModal}>Close</p>
        </div>
      </div>
    )
  }
}

const styles = {
  text: {
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 5
  },
  rating: {
    marginTop: 5,
    color: 'rgba(0, 0, 0, .6)'
  },
  review: {
    borderBottom: '2px solid #00796B'
  },
  container: {
    padding: '0px 20px'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ededed',
    zIndex: 1,
    width: '100vw',
    height: '100vh'
  },
}

export default Reviews
