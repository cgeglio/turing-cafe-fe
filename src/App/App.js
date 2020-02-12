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

    sortReservations = order => {
      if (order === 'earliest') {
        let earliest = this.state.reservations.sort((a, b) => {
          return parseInt(a.date.split('/')[0]) - parseInt(b.date.split('/')[0]);
        })
        this.setState({reservations: earliest})
      } else if (order === 'latest') {
        let latest = this.state.reservations.sort((a, b) => {
          return parseInt(b.date.split('/')[0]) - parseInt(a.date.split('/')[0]);
        })
        this.setState({reservations: latest})
      }
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
        <Container
          sortReservations={this.sortReservations}
          removeReservation={this.removeReservation}
          reservations={this.state.reservations}
        />
      </div>
  )}
}


export default App;
