import React from 'react'
import { css } from 'glamor';

const stars = [1, 2, 3, 4, 5]

class CreateRestaurant extends React.Component {
  state = {
    review: '', selectedIndex: null
  }
  createRestaurant = () => {
    if (this.state.city === '' || this.state.name === '' || this.state.photo === '') return
    this.props.createRestaurant(this.state)
    this.props.closeModal()
  }
  onChange = ({ target }) => {
    console.log('target: ', target)
    this.setState({ [target.name]: target.value })
  }
  render() {
    const { selectedIndex } = this.state
    const { closeModal } = this.props
    return (
      <div {...css(styles.overlay)}>
        <div {...css(styles.form)}>
          <div {...css(styles.stars)}>
            {
              stars.map((s, i) => (
                <p
                  onClick={() => this.setState({ selectedIndex: i })}
                  {...css([styles.star, selectedIndex === i && { backgroundColor: 'gold' }])}
                >{s} star</p>
              ))
            }
          </div>
          <input
            placeholder='Review'
            {...css(styles.input)}
            name='review'
            onChange={this.onChange}
          />
          <div
            onClick={this.createRestaurant}
            {...css(styles.button)}
          >
            <p
              {...css(styles.buttonText)}
            >Submit</p>
          </div>
          <div
            {...css([styles.button, { backgroundColor: '#555'}])}
            onClick={closeModal}
          >
            <p
              {...css(styles.buttonText)}
            >Cancel</p>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100vw',
    height: '100vh'
  },
  input: {
    width: '90%',
    height: 35,
    margin: 5,
    outline: 'none',
    border: 'none',
    fontSize: 16,
    borderBottom: '3px solid #00796B'
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#00796B',
    marginTop: 10,
    cursor: 'pointer'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  star: {
    backgroundColor: '#ddd',
    margin: 0,
    marginBottom: 5,
    width: '90%',
    padding: '10px'
  },
  stars: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10
  }
}

export default CreateRestaurant