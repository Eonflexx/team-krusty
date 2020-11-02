import React from 'react';

const product1 = 'Whole Chicken (10 lb)';
const product1Brand = 'Charlies Grocery & Deli';
const product1Price = '$ 15.99';

const product2 = 'Raw, Peeled, Deveined Shrimp (2.0 lb)';
const product2Brand = 'Aqua Star';
const product2Price = '$ 6.00';

const product3 = 'Grilled Salmon (2 fillets)';
const product3Brand = 'Gortons';
const product3Price = '$ 6.99';

const product4 = 'Beef Pastrami (10 lb)';
const product4Brand = 'Meijers';
const product4Price = '$ 19.99';

const product5 = 'Tillapia (1 fillet)';
const product5Brand = 'Argents Sea Palace';
const product5Price = '$ 1.99';

const Condiments = () => (
  <div>
    <ul>
      <h4><img src="/imagesrevised/Slide41.jpeg" alt="Charlies 10lb Whole Chicken"></img></h4>
      <h3>{product1}</h3>
      <h4>{product1Brand}</h4>
      <p>{product1Price}</p>
      <h4><img src="/imagesrevised/Slide42.jpeg" alt="Aqua Star Prepared Shrimp"></img></h4>
      <h3>{product2}</h3>
      <h4>{product2Brand}</h4>
      <p>{product2Price}</p>
      <h4><img src="/imagesrevised/Slide43.jpeg" alt="Gorton's Grilled Salmon"></img></h4>
      <h3>{product3}</h3>
      <h4>{product3Brand}</h4>
      <p>{product3Price}</p>
      <h4><img src="/imagesrevised/Slide44.jpeg" alt="Meijers Beef Pastrami"></img></h4>
      <h3>{product4}</h3>
      <h4>{product4Brand}</h4>
      <p>{product4Price}</p>
      <h4><img src="/imagesrevised/Slide45.jpeg" alt="Argents Sea Palace Tillapia"></img></h4>
      <h3>{product5}</h3>
      <h4>{product5Brand}</h4>
      <p>{product5Price}</p>
    </ul>
  </div>
);

export default Condiments;