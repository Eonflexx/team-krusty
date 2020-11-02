import React from 'react';

const product1 = 'Life Savers (7 oz) 12 pack';
const product1Brand = 'Life Savers';
const product1Price = '$ 5.99';

const product2 = 'Skittles & Starbursts Variety Pack (18 pack)';
const product2Brand = 'Starburst';
const product2Price = '$ 6.99';

const product3 = 'Sour Patch & Swedish Patch Variety Pack (15 pack)';
const product3Brand = 'Sour Patch';
const product3Price = '$ 5.99';

const product4 = 'Twizzlers nibs 12 pack';
const product4Brand = 'Twizzlers';
const product4Price = '$ 4.50';

const product5 = 'Whoppers (12 oz, 2 cartons)';
const product5Brand = 'Whoppers';
const product5Price = '$ 3.99';

const Condiments = () => (
  <div>
    <ul>
      <h4><img src="/imagesrevised/Slide56.jpeg" alt=""></img></h4>
      <h3>{product1}</h3>
      <h4>{product1Brand}</h4>
      <p>{product1Price}</p>
      <h4><img src="/imagesrevised/Slide57.jpeg" alt=""></img></h4>
      <h3>{product2}</h3>
      <h4>{product2Brand}</h4>
      <p>{product2Price}</p>
      <h4><img src="/imagesrevised/Slide58.jpeg" alt=""></img></h4>
      <h3>{product3}</h3>
      <h4>{product3Brand}</h4>
      <p>{product3Price}</p>
      <h4><img src="/imagesrevised/Slide59.jpeg" alt=""></img></h4>
      <h3>{product4}</h3>
      <h4>{product4Brand}</h4>
      <p>{product4Price}</p>
      <h4><img src="/imagesrevised/Slide60.jpeg" alt=""></img></h4>
      <h3>{product5}</h3>
      <h4>{product5Brand}</h4>
      <p>{product5Price}</p>
    </ul>
  </div>
);

export default Condiments;