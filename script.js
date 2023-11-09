// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, qt);

console.log('Importing module');
// console.log(y);
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { cart, tega } from './shoppingCart.js';
// add('pizza', 2);
// add('amala', 12);
// add('beans', 20);

// console.log(Object.values(cart));
// console.log(Object.values({ tega }));

// console.log('udoh na great cheif: Starting fetching');
// const data = await fetch('https://jsonplaceholder.typicode.com/posts');
// const res = await data.json();
// console.log(res);

// console.log('something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   // console.log(res);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = await getLastPost();
// console.log(lastPost);

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const shoppingCart = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 238;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   return {
//     addToCart,
//     cart,
//     shippingCost,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCart.addToCart('bread', 5);
// shoppingCart.addToCart('tomato', 5);
// console.log(shoppingCart);

import { addToCart } from './shoppingCart.js';

import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 9 },
  ],

  user: { loggedIn: true },
};

if (module.hot) {
  module.hot.accept();
}

const stateClone = Object.assign({}, state);
console.log(stateClone);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
