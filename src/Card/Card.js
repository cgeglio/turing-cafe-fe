import React from 'react';
import './Card.css';

const Card = ({ reservation, removeReservation }) => {
  return (
    <article>
      <h2>{reservation.name}</h2>
      <h2>{reservation.date}</h2>
      <h2>{reservation.time}</h2>
      <h2>{reservation.number}</h2>
      <button onClick={() => {removeReservation(reservation.id)}}>Remove</button>
    </article>
  )
}

export default Card;
