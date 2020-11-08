import React from 'react';

const product1 = 'Dry Erase Ultra Fine Tip (8 pack)';
const product1Brand = 'Expo';
const product1Price = '$ 5.99';

const product2 = 'Composition Notebook';
const product2Brand = 'Mead';
const product2Price = '$ 1.00';

const product3 = 'Stapler';
const product3Brand = 'Swingline';
const product3Price = '$ 7.99';

const product4 = 'Gel Pen (12 pack)';
const product4Brand = 'Pilot';
const product4Price = '$ 6.99';

const product5 = 'Adjustable 2-3 Hole Puncher';
const product5Brand = 'Swingline';
const product5Price = '$ 9.00';

const Condiments = () => (
  <div>
    <ul>
      <h4><img src="/imagesrevised/Slide46.jpeg" alt="Expo Dry Erase Fine Tip Markers"></img></h4>
      <h3>{product1}</h3>
      <h4>{product1Brand}</h4>
      <p>{product1Price}</p>
      <h4><img src="/imagesrevised/Slide48.jpeg" alt="Mead Composition Notebook"></img></h4>
      <h3>{product2}</h3>
      <h4>{product2Brand}</h4>
      <p>{product2Price}</p>
      <h4><img src="/imagesrevised/Slide50.jpeg" alt="Swingline Stapler"></img></h4>
      <h3>{product3}</h3>
      <h4>{product3Brand}</h4>
      <p>{product3Price}</p>
      <h4><img src="/imagesrevised/Slide49.jpeg" alt="Pilot Gel Pen (12 pack)"></img></h4>
      <h3>{product4}</h3>
      <h4>{product4Brand}</h4>
      <p>{product4Price}</p>
      <h4><img src="/imagesrevised/Slide47.jpeg" alt="Swingline Adjustable Hole Puncher"></img></h4>
      <h3>{product5}</h3>
      <h4>{product5Brand}</h4>
      <p>{product5Price}</p>
    </ul>
  </div>
);

export default Condiments;