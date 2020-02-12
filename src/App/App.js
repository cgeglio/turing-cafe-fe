import React, { Component } from 'react';
import './App.css';
import Container from '../Container/Container.js'
import Form from '../Form/Form.js'

class App extends Component {
  constructor() {
    super();
    this.state = {reservations: []};
  }

  componentDidMount = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservations => this.setState({reservations: reservations}))
    }

    addReservation = reservation => {
      // post + set state
    }

    removeReservation = reservationId => {
      // delete + set state
    }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form
            addReservation={this.addReservation}
          />
        </div>
        <div className='resy-container'>
          <Container
            removeReservation={this.removeReservation}
            reservations={this.state.reservations}
          />
        </div>
      </div>
  )}
}


export default App;
