import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { loadProdcuts } from "../data/products.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

loadProdcuts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
