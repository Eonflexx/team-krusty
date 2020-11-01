import React from 'react';

const product1 = 'Vegetarian Baked Beans 16oz';
const product1Brand = 'Bushs Best';
const product1Price = '$ 1.99';

const product2 = 'Organic Chili Black Beans 14.7oz 12 pack';
const product2Brand = 'Amys';
const product2Price = '$ 4.99';

const product3 = 'Sardines in Soybean Oil 3.75oz';
const product3Brand = 'Beach Cliff';
const product3Price = '$ 1.00';

const product4 = 'Spam Classic 12oz 12 pack';
const product4Brand = 'Spam';
const product4Price = '$ 35.00';

const product5 = 'Chunky Steak and Potato';
const product5Brand = 'Campbells';
const product5Price = '$ 2.49';

const Cannedfood = () => (
  <div>
    <ul>
      <h4><img src="/imagesrevised/Slide16.jpeg" alt="Vegetarian Baked Beans"></img></h4>
      <h3>{product1}</h3>
      <h4>{product1Brand}</h4>
      <p>{product1Price}</p>
      <h4><img src="/imagesrevised/Slide17.jpeg" alt="Chili Black Beans 14.7oz"></img></h4>
      <h3>{product2}</h3>
      <h4>{product2Brand}</h4>
      <p>{product2Price}</p>
      <h4><img src="/imagesrevised/Slide18.jpeg" alt="Sardines in Soybean Oil (3.75 oz)"></img></h4>
      <h3>{product3}</h3>
      <h4>{product3Brand}</h4>
      <p>{product3Price}</p>
      <h4><img src="/imagesrevised/Slide19.jpeg" alt="Spam Classic (12 oz)"></img></h4>
      <h3>{product4}</h3>
      <h4>{product4Brand}</h4>
      <p>{product4Price}</p>
      <h4><img src="/imagesrevised/Slide20.jpeg" alt="Chunky Steak and Potato"></img></h4>
      <h3>{product5}</h3>
      <h4>{product5Brand}</h4>
      <p>{product5Price}</p>
    </ul>
  </div>
);

export default Cannedfood;