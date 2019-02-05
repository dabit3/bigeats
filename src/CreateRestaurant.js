import React from 'react'
import { css } from 'glamor';

class CreateRestaurant extends React.Component {
  state = {
    name: '', city: '', photo: '', reviews: { items: [] }
  }
  createRestaurant = () => {
    if (this.state.city === '' || this.state.name === '' || this.state.photo === '') return
    this.props.createRestaurant(this.state)
    this.props.closeModal()
  }
  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }
  render() {
    const { closeModal } = this.props
    return (
      <div {...css(styles.overlay)}>
        <div {...css(styles.form)}>
          <input
            placeholder='Restaurant name'
            {...css(styles.input)}
            name='name'
            onChange={this.onChange}
          />
          <input
            placeholder='City'
            {...css(styles.input)}
            name='city'
            onChange={this.onChange}
          />
          <input
            placeholder='Photo'
            {...css(styles.input)}
            name='photo'
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
  }
}

export default CreateRestaurant