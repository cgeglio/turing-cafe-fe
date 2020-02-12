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
      .catch(error => console.log('Error fetching'))
    }

    addReservation = reservation => {
      const options = {
        method: 'POST',
        body: JSON.stringify(reservation),
        headers: {
          'Content-Type': 'application/json'
        }
      }

      return fetch('http://localhost:3001/api/v1/reservations', options)
        .then(response => {
              if(!response.ok) {
                throw Error('Error posting')
              }
              return response.json()})
        .then(reservationData => this.setState({reservations: [...this.state.reservations, reservationData]}))
        .catch(error => console.log('Error posting'))
    }

    removeReservation = reservation => {
      return fetch(`http://localhost:3001/api/v1/reservations/${reservation.id}`, {method: 'DELETE'})
        .then(response => {
          if(!response.ok) {
            throw Error('Error deleting')
          }
          return response.json()})
        .then(reservationData => this.setState({reservations: reservationData}))
        .catch(error => console.log('Error deleting'))
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
