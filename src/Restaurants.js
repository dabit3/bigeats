import React, { Component } from 'react';
import { css } from 'glamor'

class Restaurants extends Component {
  render() {
    const { restaurants } = this.props
    return (
      <div {...css(styles.container)}>
        {
          restaurants.map((r, i) => (
            <div key={i} onClick={() => this.props.showCreateReview(r)}>
              <img
                src={r.photo}
                {...css(styles.image)}
              />
              <p {...css(styles.title)}>{r.city}</p>
              <p {...css(styles.subtitle)}>{r.name}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

const styles = {
  image: {
    width: '100%',
  },
  title: {
    fontSize: 22,
    margin: '5px 0px 0px 10px'
  },
  subtitle: {
    margin: '5px 0px 20px 10px'
  },
  container: {
    width: '100%',
    margin: '0 auto',
    marginTop: 55
  }
}

export default Restaurants