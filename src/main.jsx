import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

import Price from './price-card/price.jsx';


const priceCards = [
  {
    type: 'FREE',
    price: 0,
    features: [
      { name: 'Single User', available: true },
      { name: '50 GB', available: true },
      { name: 'Unlimited Projects', available: true },
      { name: 'Community Access', available: true },
      { name: 'Unlimited Private Projects', available: false },
      { name: 'Dedicated Phone Support', available: false },
      { name: 'Free Subdomain', available: false },
      { name: 'Monthly Status Reports', available: false },
    ],
  },
  {
    type: 'PLUS',
    price: 9,
    features: [
      { name: 'Single User', available: true },
      { name: '50 GB', available: true },
      { name: 'Unlimited Projects', available: true },
      { name: 'Community Access', available: true },
      { name: 'Unlimited Private Projects', available: true },
      { name: 'Dedicated Phone Support', available: true },
      { name: 'Free Subdomain', available: true },
      { name: 'Monthly Status Reports', available: false },
    ],
  },
  {
    type: 'PRO',
    price: 49,
    features: [
      { name: 'Single User', available: true },
      { name: '50 GB', available: true },
      { name: 'Unlimited Projects', available: true },
      { name: 'Community Access', available: true },
      { name: 'Unlimited Private Projects', available: true },
      { name: 'Dedicated Phone Support', available: true },
      { name: 'Free Subdomain', available: true },
      { name: 'Monthly Status Reports', available: true },
    ],
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //     <Price />
  // </React.StrictMode>
    

    <div>
    {priceCards.map((card, index) => (
      <Price
        key={index} // Use a more stable key like card.type if available
        type={card.type}
        price={card.price}
        features={card.features}
      />
    ))}
  </div>

);


