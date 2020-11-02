import React from 'react';

const product1 = 'Black Coffee';
const product1Brand = 'Geralds Cafe';
const product1Price = '$ 1.99';

const product2 = 'Early Muffin Sandwiches(2 sandwiches)';
const product2Brand = 'Kristys Cafe';
const product2Price = '$ 4.99';

const product3 = 'Quadruple Pancake stack with Chocolate Chips and butter';
const product3Brand = 'Kristys Cafe';
const product3Price = '$ 6.00';

const product4 = 'Plain Bagel with Cream Cheese';
const product4Brand = 'Charlies Deli & Grocery';
const product4Price = '$ 1.50';

const product5 = 'Bacon and Eggs';
const product5Brand = 'Geralds Cafe';
const product5Price = '$ 4.99';

const Cafeanddeli = () => (
  <div>
    <ul>
      <h4><img src="/imagesrevised/Slide12.jpeg" alt="Geralds Black Coffee"></img></h4>
      <h3>{product1}</h3>
      <h4>{product1Brand}</h4>
      <p>{product1Price}</p>
      <h4><img src="/imagesrevised/Slide13.jpeg" alt="Early Muffin Sandwiches"></img></h4>
      <h3>{product2}</h3>
      <h4>{product2Brand}</h4>
      <p>{product2Price}</p>
      <h4><img src="/imagesrevised/Slide14.jpeg" alt="Quadruple Pancake Stack"></img></h4>
      <h3>{product3}</h3>
      <h4>{product3Brand}</h4>
      <p>{product3Price}</p>
      <h4><img src="/imagesrevised/Slide15.jpeg" alt="Bagel and Cream Cheese"></img></h4>
      <h3>{product4}</h3>
      <h4>{product4Brand}</h4>
      <p>{product4Price}</p>
      <h4><img src="/imagesrevised/Slide11.jpeg" alt="Bacon and Eggs"></img></h4>
      <h3>{product5}</h3>
      <h4>{product5Brand}</h4>
      <p>{product5Price}</p>
    </ul>
  </div>
);

export default Cafeanddeli;