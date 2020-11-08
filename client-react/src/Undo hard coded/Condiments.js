import React from 'react';

const product1 = 'Mustard 30oz';
const product1Brand = 'Frenchs';
const product1Price = '$ 3.00';

const product2 = 'Ketchup 32oz';
const product2Brand = 'Heinz';
const product2Price = '$ 2.49';

const product3 = 'Mayonnaise 32oz';
const product3Brand = 'Hellmans';
const product3Price = '$ 2.99';

const product4 = 'Sweet Honey Barbecue Sauce';
const product4Brand = 'Kraft';
const product4Price = '$ 2.25';

const product5 = 'Sriracha Sauce 28oz';
const product5Brand = 'Huy Fong';
const product5Price = '$ 3.49';

const Condiments = () => (
  <div>
    <ul>
      <h4><img src="/imagesrevised/Slide26.jpeg" alt="Frenchs Mustard (30 oz)"></img></h4>
      <h3>{product1}</h3>
      <h4>{product1Brand}</h4>
      <p>{product1Price}</p>
      <h4><img src="/imagesrevised/Slide27.jpeg" alt="Heinz Ketchup (32 oz)"></img></h4>
      <h3>{product2}</h3>
      <h4>{product2Brand}</h4>
      <p>{product2Price}</p>
      <h4><img src="/imagesrevised/Slide28.jpeg" alt="Hellmans Mayonnaise (32oz)"></img></h4>
      <h3>{product3}</h3>
      <h4>{product3Brand}</h4>
      <p>{product3Price}</p>
      <h4><img src="/imagesrevised/Slide29.jpeg" alt="Kraft Sweet Honey Barbecue Sauce"></img></h4>
      <h3>{product4}</h3>
      <h4>{product4Brand}</h4>
      <p>{product4Price}</p>
      <h4><img src="/imagesrevised/Slide30.jpeg" alt="Huy Fong Sriracha Sauce (28 oz)"></img></h4>
      <h3>{product5}</h3>
      <h4>{product5Brand}</h4>
      <p>{product5Price}</p>
    </ul>
  </div>
);

export default Condiments;