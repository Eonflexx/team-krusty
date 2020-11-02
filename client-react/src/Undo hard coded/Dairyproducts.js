import React from 'react';

const product1 = 'Milk Gallon';
const product1Brand = 'Borden';
const product1Price = '$ 3.00';

const product2 = 'American Cheese (16 oz)';
const product2Brand = 'Kraft';
const product2Price = '$ 4.99';

const product3 = 'Mozzarella Cheese';
const product3Brand = 'Polly O';
const product3Price = '$ 2.99';

const product4 = 'Provolone 12 Slices (8 oz)';
const product4Brand = 'Sargento';
const product4Price = '$ 3.25';

const product5 = 'Imported Parmesan Cheese';
const product5Brand = 'Milano';
const product5Price = '$ 3.49';

const Condiments = () => (
  <div>
    <ul>
      <h4><img src="/imagesrevised/Slide31.jpeg" alt="Borden Gallon of Milk"></img></h4>
      <h3>{product1}</h3>
      <h4>{product1Brand}</h4>
      <p>{product1Price}</p>
      <h4><img src="/imagesrevised/Slide32.jpeg" alt="Kraft American Cheese Slices"></img></h4>
      <h3>{product2}</h3>
      <h4>{product2Brand}</h4>
      <p>{product2Price}</p>
      <h4><img src="/imagesrevised/Slide33.jpeg" alt="Polly-O Mozarella Cheese"></img></h4>
      <h3>{product3}</h3>
      <h4>{product3Brand}</h4>
      <p>{product3Price}</p>
      <h4><img src="/imagesrevised/Slide34.jpeg" alt="Sargento Provolone Slices"></img></h4>
      <h3>{product4}</h3>
      <h4>{product4Brand}</h4>
      <p>{product4Price}</p>
      <h4><img src="/imagesrevised/Slide35.jpeg" alt="Milano Imported Parmesan Cheese"></img></h4>
      <h3>{product5}</h3>
      <h4>{product5Brand}</h4>
      <p>{product5Price}</p>
    </ul>
  </div>
);

export default Condiments;