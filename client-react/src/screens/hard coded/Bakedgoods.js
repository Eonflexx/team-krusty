import React from 'react';

const product1 = 'Iced Molasses 12 oz';
const product1Brand = 'Archway';
const product1Price = '$ 3.99';

const product2 = 'Mini Cookie 30 pack';
const product2Brand = 'Grandmas';
const product2Price = '$ 6.00';

const product3 = 'Grandmas Cookies Variety 30 Pack';
const product3Brand = 'Grandmas';
const product3Price = '$ 8.00';

const product4 = 'Lorna Doone';
const product4Brand = 'Nabisco';
const product4Price = '$ 3.99';

const product5 = '20 Pack Mini Oreos';
const product5Brand = 'Nabisco';
const product5Price = '$ 5.99';

const Bakedgoods = () => (
  <div>
    <ul>
      <h4><img src="/imagesrevised/Slide1.jpeg" alt="Iced Molasses 12oz"></img></h4>
      <h3>{product1}</h3>
      <h4>{product1Brand}</h4>
      <p>{product1Price}</p>
      <h4><img src="/imagesrevised/Slide2.jpeg" alt="Grandmas Mini Cookies Variety 30 pack"></img></h4>
      <h3>{product2}</h3>
      <h4>{product2Brand}</h4>
      <p>{product2Price}</p>
      <h4><img src="/imagesrevised/Slide3.jpeg" alt="Grandmas Cookies Variety 30 pack"></img></h4>
      <h3>{product3}</h3>
      <h4>{product3Brand}</h4>
      <p>{product3Price}</p>
      <h4><img src="/imagesrevised/Slide4.jpeg" alt="Nabisco Lorna Doone"></img></h4>
      <h3>{product4}</h3>
      <h4>{product4Brand}</h4>
      <p>{product4Price}</p>
      <h4><img src="/imagesrevised/Slide5.jpeg" alt="Oreo Mini Variety 20 pack"></img></h4>
      <h3>{product5}</h3>
      <h4>{product5Brand}</h4>
      <p>{product5Price}</p>
    </ul>
  </div>
);

export default Bakedgoods;