import React from 'react';
import './Card.css';

const Card = ({ reservation, addReservation }) => {
  return (
    <article>
      <h2>{reservation.name}</h2>
      <h2>{reservation.date}</h2>
      <h2>{reservation.time}</h2>
      <h2>{reservation.number}</h2>
    </article>
  )
}

export default Card;
