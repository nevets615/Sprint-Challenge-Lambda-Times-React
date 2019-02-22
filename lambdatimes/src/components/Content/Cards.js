import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div>
    {props.cards.map(cards => (
    <div key={cards.id} className="cards-container">
    </div>
    ))}

</div>
  );
    }

Cards.propType = {
  propType.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired

  })
}
// Make sure you include prop types for all of your incoming props

export default Cards;