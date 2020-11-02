import React from 'react';

const product1 = 'Apple';
const product1Brand = 'Jerrys Orchard';
const product1Price = '$ 0.50';

const product2 = 'Brocolli (2 lb)';
const product2Brand = 'Harolds Farm';
const product2Price = '$ 1.00';

const product3 = 'Orange';
const product3Brand = 'Jerrys Orchard';
const product3Price = '$ 0.75';

const product4 = 'Banana';
const product4Brand = 'Henrys Farm';
const product4Price = '$ 0.50';

const product5 = 'Box of Strawberries';
const product5Brand = 'Sarahs Hamlet';
const product5Price = '$ 4.99';

const Condiments = () => (
  <div>
    <ul>
      <h4><img src="/imagesrevised/Slide51.jpeg" alt="Jerrys Orchard Apple"></img></h4>
      <h3>{product1}</h3>
      <h4>{product1Brand}</h4>
      <p>{product1Price}</p>
      <h4><img src="/imagesrevised/Slide52.jpeg" alt="Harolds Farm Brocolli"></img></h4>
      <h3>{product2}</h3>
      <h4>{product2Brand}</h4>
      <p>{product2Price}</p>
      <h4><img src="/imagesrevised/Slide53.jpeg" alt="Jerrys Orchard Orange"></img></h4>
      <h3>{product3}</h3>
      <h4>{product3Brand}</h4>
      <p>{product3Price}</p>
      <h4><img src="/imagesrevised/Slide54.jpeg" alt="Henrys Farm Banana"></img></h4>
      <h3>{product4}</h3>
      <h4>{product4Brand}</h4>
      <p>{product4Price}</p>
      <h4><img src="/imagesrevised/Slide55.jpeg" alt="Sarah Hamlet Strawberries"></img></h4>
      <h3>{product5}</h3>
      <h4>{product5Brand}</h4>
      <p>{product5Price}</p>
    </ul>
  </div>
);

export default Condiments;