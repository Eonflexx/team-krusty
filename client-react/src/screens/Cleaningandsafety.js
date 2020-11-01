import React from 'react';

const product1 = 'Disposable Masks 50 pack';
const product1Brand = 'Covonda';
const product1Price = '$ 14.99';

const product2 = 'Box of 100 Disposable Gloves';
const product2Brand = 'Blue Cross';
const product2Price = '$ 10.99';

const product3 = 'Oil Soap 32oz';
const product3Brand = 'Murphy';
const product3Price = '$ 3.49';

const product4 = 'Hand Sanitizer 8oz';
const product4Brand = 'Purrell';
const product4Price = '$ 3.49';

const product5 = 'Disinfectant Spray 23oz';
const product5Brand = 'Windex';
const product5Price = '$ 3.25';

const Cleaningandsafety = () => (
  <div>
    <ul>
      <h4><img src="/imagesrevised/Slide21.jpeg" alt="Disposable Masks 50 pack"></img></h4>
      <h3>{product1}</h3>
      <h4>{product1Brand}</h4>
      <p>{product1Price}</p>
      <h4><img src="/imagesrevised/Slide22.jpeg" alt="Blue Cross Disposable Gloves"></img></h4>
      <h3>{product2}</h3>
      <h4>{product2Brand}</h4>
      <p>{product2Price}</p>
      <h4><img src="/imagesrevised/Slide23.jpeg" alt="Oil Soap (32 oz)"></img></h4>
      <h3>{product3}</h3>
      <h4>{product3Brand}</h4>
      <p>{product3Price}</p>
      <h4><img src="/imagesrevised/Slide24.jpeg" alt="Purrell Hand Sanitizer"></img></h4>
      <h3>{product4}</h3>
      <h4>{product4Brand}</h4>
      <p>{product4Price}</p>
      <h4><img src="/imagesrevised/Slide25.jpeg" alt="Windex Disinfectant Spray"></img></h4>
      <h3>{product5}</h3>
      <h4>{product5Brand}</h4>
      <p>{product5Price}</p>
    </ul>
  </div>
);

export default Cleaningandsafety;