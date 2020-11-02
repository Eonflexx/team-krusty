import React from 'react';

const product1 = 'Fla-Vor-Ice (1.5 oz) 100 pack';
const product1Brand = 'Fla-Vor-Ice';
const product1Price = '$ 3.00';

const product2 = 'Coffee Ice Cream (14 oz)';
const product2Brand = 'Haagen Dazs';
const product2Price = '$ 3.99';

const product3 = 'Thin Crust Pizza';
const product3Brand = 'Jacks';
const product3Price = '$ 7.99';

const product4 = 'Asian Vegetable Medley (10.8 oz)';
const product4Brand = 'Birds Eye';
const product4Price = '$ 1.99';

const product5 = 'Plant-Based Frozen Meal, Butternut Squash Curry Bowl';
const product5Brand = 'Evol';
const product5Price = '$ 3.75';

const Condiments = () => (
  <div>
    <ul>
      <h4><img src="/imagesrevised/Slide37.jpeg" alt="Fla-Vor-Ice 100 pack"></img></h4>
      <h3>{product1}</h3>
      <h4>{product1Brand}</h4>
      <p>{product1Price}</p>
      <h4><img src="/imagesrevised/Slide39.jpeg" alt="Haagen Dazs Coffee Flavor"></img></h4>
      <h3>{product2}</h3>
      <h4>{product2Brand}</h4>
      <p>{product2Price}</p>
      <h4><img src="/imagesrevised/Slide40.jpeg" alt="Jacks Thin Crust Pizza"></img></h4>
      <h3>{product3}</h3>
      <h4>{product3Brand}</h4>
      <p>{product3Price}</p>
      <h4><img src="/imagesrevised/Slide38.jpeg" alt="Birds Eye Asian Vegetable Medley"></img></h4>
      <h3>{product4}</h3>
      <h4>{product4Brand}</h4>
      <p>{product4Price}</p>
      <h4><img src="/imagesrevised/Slide36.jpeg" alt="Evol Butternut Squash Curry Bowl"></img></h4>
      <h3>{product5}</h3>
      <h4>{product5Brand}</h4>
      <p>{product5Price}</p>
    </ul>
  </div>
);

export default Condiments;