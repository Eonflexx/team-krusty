import React from 'react';

const product1 = 'Limebubly 8 pack';
const product1Brand = 'Bubly';
const product1Price = '$ 3.50';

const product2 = 'Coca Cola 12 pack';
const product2Brand = 'Coca Cola';
const product2Price = '$ 4.99';

const product3 = 'Half Tea & Half Lemonade 12 pack';
const product3Brand = 'Honest';
const product3Price = '$ 5.00';

const product4 = 'Sparkling Water Variety 3 pack';
const product4Brand = 'Life Wtr';
const product4Price = '$ 3.99';

const product5 = 'Red Bull 8.4 oz 24 pack';
const product5Brand = 'Red Bull GmbH';
const product5Price = '$ 5.99';

const Beverages = () => (
  <div>
    <ul>
      <h4><img src="/imagesrevised/Slide6.jpeg" alt="Bubly Sparkling Water: limebubly 8 pack"></img></h4>
      <h3>{product1}</h3>
      <h4>{product1Brand}</h4>
      <p>{product1Price}</p>
      <h4><img src="/imagesrevised/Slide7.jpeg" alt="Coca Cola 12 pack"></img></h4>
      <h3>{product2}</h3>
      <h4>{product2Brand}</h4>
      <p>{product2Price}</p>
      <h4><img src="/imagesrevised/Slide8.jpeg" alt="Honest (16.9 oz) 12 pack"></img></h4>
      <h3>{product3}</h3>
      <h4>{product3Brand}</h4>
      <p>{product3Price}</p>
      <h4><img src="/imagesrevised/Slide9.jpeg" alt="Life Wtr 3 pack"></img></h4>
      <h3>{product4}</h3>
      <h4>{product4Brand}</h4>
      <p>{product4Price}</p>
      <h4><img src="/imagesrevised/Slide10.jpeg" alt="Red Bull (8.4 oz) 24 pack"></img></h4>
      <h3>{product5}</h3>
      <h4>{product5Brand}</h4>
      <p>{product5Price}</p>
    </ul>
  </div>
);

export default Beverages;