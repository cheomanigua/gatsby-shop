import React from 'react';
import '../css/style.css'

function Shop(props) {
  
    const content = props.cards.map((card) =>
    <div key={card.id} className="item" >
      <img src={card.image} alt={card.title} />
      <div className="info">
        <h4>{card.title}</h4>
        <p>{card.content}</p>
      </div>
    </div>
    );
    return (
      <div className="container">
      {content}
    </div>
    );
}
export default Shop;