import React from 'react';
import './Container.css';
import Card from '../Card/Card.js'

const Container = ({ reservations, removeReservation }) => {
  return reservations.map(reservation => {
    return (
    <Card
      key={`${reservation.name}-${reservation.date}-`}
      reservation={reservation}
      removeReservation={removeReservation}
    />
    )
  })
}

export default Container;
