// price.jsx

// import React from 'react';
import './price.css';

const Price = ({ type, price, features }) => {
  return (
    <div className="price-card">
      <h2 style={{textAlign:'center'}}>{type}</h2>
      <p style={{textAlign:'center'}}>${price}/Month</p>
      <hr></hr>
      <ul>
        {features.map((feature, i) => (
          <li key={i} style={{ color: feature.available ? '#000' : '#e9ebed' }}>
            <i className={feature.available ? "fas fa-check" : "fas fa-times"} style={{ fontSize: '12px', marginRight: '5px' }}></i> {feature.name}
          </li>
        ))}
      </ul>
      <div style={{textAlign:'center'}}>
        <button type="button" className="btn btn-primary button">Button</button>
      </div>
     
    </div>
  );
};

export default Price;
