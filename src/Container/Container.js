import React from 'react';
import './Container.css';
import Card from '../Card/Card.js'

const Container = ({ reservations, addReservation }) => {
  return reservations.map(reservation => {
    return <Card reservation={reservation} addReservation={addReservation}/>
  })
}

export default Container;
