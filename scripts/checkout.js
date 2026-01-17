import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { loadProdcuts, loadProdcutsFetch } from "../data/products.js";
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

Promise.all([
  loadProdcutsFetch(),
  new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});


// new Promise((resolve) => {
//   loadProdcuts(() => {
//     resolve('value1');
//   });
// }).then((value) => {
//   console.log(value);

//   return new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   });

// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });


// loadProdcuts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
