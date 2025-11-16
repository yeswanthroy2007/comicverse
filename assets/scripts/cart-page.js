import {
  getCartItems,
  updateQuantity,
  removeFromCart,
  calculateTotals,
  clearCart,
} from "./cart.js";
import { formatCurrency, showToast, getImagePath } from "./ui.js";

const tbody = document.querySelector("[data-cart-body]");
const emptyState = document.querySelector("[data-cart-empty]");
const totalsNode = document.querySelector("[data-cart-totals]");
const checkoutBtn = document.querySelector("[data-checkout]");
const checkoutMessage = document.querySelector("[data-checkout-message]");

const renderCart = () => {
  if (!tbody || !emptyState) return;
  const items = getCartItems();
  if (!items.length) {
    tbody.innerHTML = "";
    emptyState.hidden = false;
    totalsNode.hidden = true;
    return;
  }
  emptyState.hidden = true;
  totalsNode.hidden = false;
  tbody.innerHTML = items
    .map(
      (item) => `
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:1rem;">
              <img src="${getImagePath(item.coverImg)}" alt="${item.title}" width="60" height="90" />
              <div>
                <strong>${item.title}</strong>
                <p class="card-meta">${item.publisher}</p>
              </div>
            </div>
          </td>
          <td>${formatCurrency(item.price)}</td>
          <td>
            <div class="cart-item-actions">
              <button class="qty-btn" data-action="decrement" data-id="${item.id}">-</button>
              <span>${item.quantity}</span>
              <button class="qty-btn" data-action="increment" data-id="${item.id}">+</button>
            </div>
          </td>
          <td>${formatCurrency(item.price * item.quantity)}</td>
          <td>
            <button class="btn btn-secondary" data-action="remove" data-id="${item.id}">Remove</button>
          </td>
        </tr>
      `,
    )
    .join("");
  const totals = calculateTotals(items);
  totalsNode.innerHTML = `
    <div class="cart-totals">
      <div class="meta-row"><span>Subtotal</span><strong>${formatCurrency(
        totals.subtotal,
      )}</strong></div>
      <div class="meta-row"><span>Tax (7%)</span><strong>${formatCurrency(
        totals.tax,
      )}</strong></div>
      <div class="meta-row"><span>Total</span><strong>${formatCurrency(
        totals.total,
      )}</strong></div>
    </div>
  `;
};

const handleCartClick = (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const { action, id } = button.dataset;
  if (action === "increment") {
    const current =
      getCartItems().find((item) => item.id === id)?.quantity || 0;
    updateQuantity(id, current + 1);
  }
  if (action === "decrement") {
    const current =
      getCartItems().find((item) => item.id === id)?.quantity || 0;
    if (current <= 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, current - 1);
    }
  }
  if (action === "remove") {
    removeFromCart(id);
  }
};

tbody?.addEventListener("click", handleCartClick);

window.addEventListener("cart:update", renderCart);
window.addEventListener("DOMContentLoaded", renderCart);

checkoutBtn?.addEventListener("click", () => {
  if (!getCartItems().length) {
    showToast("Add items before checking out");
    return;
  }
  clearCart();
  showToast("Thanks for your simulated order!");
  if (checkoutMessage) {
    checkoutMessage.textContent =
      "Order confirmed! We'll beam the comics straight to your device.";
  }
});
