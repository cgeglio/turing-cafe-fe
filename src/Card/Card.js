import React from 'react';
import './Card.css';

const Card = ({ reservation, removeReservation }) => {
  return (
    <article>
      <h2>{reservation.name}</h2>
      <h3>{reservation.date}</h3>
      <h3>{reservation.time}</h3>
      <h3>Number of guests: {reservation.number}</h3>
      <button className="cancel-btn" onClick={() => {removeReservation(reservation)}}>Cancel</button>
    </article>
  )
}

export default Card;
