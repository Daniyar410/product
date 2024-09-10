// const catalog = [
//   {
//     img: 'https://envybox.io/blog/wp-content/uploads/2023/07/IMG_3505.jpg',
//     name: 'сумка',
//     oldPrice: 298000,
//     newPrice: 170000,
//   },
//   {
//     img: 'https://ae01.alicdn.com/kf/H2bc17df274b84ca583bf860bc7370108d.jpg',
//     name: 'meme',
//     oldPrice: 145000,
//     newPrice: 900000,
//   },
//   {
//     img: 'https://images2.memedroid.com/images/UPLOADED36/51ebcd63708c8.jpeg',
//     name: 'пакет',
//     oldPrice: 1000,
//     newPrice: 2000,
//   },
// ];

import './ProductsData.js';

const wrap = document.querySelector('.wrap');

const cards = ProductsData.map((card) => {
  return `
        <div class="card">
        <img src=${card.imageUrl} alt="lorem" />
        <h3>${card.name}</h3>
        <b>${card.brand}</b>
        <h2>${card.price} ${ card.currency}</h2>
        <p>${card.category.name0}</p>
        </div>                                                                                                                                  
    `;
}).join('');

wrap.innerHTML = cards;
