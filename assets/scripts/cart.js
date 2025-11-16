import { readStorage, writeStorage } from "./storage.js";

const CART_KEY = "cart-v1";

let cart = readStorage(CART_KEY, []);

const persist = () => {
  writeStorage(CART_KEY, cart);
  window.dispatchEvent(
    new CustomEvent("cart:update", {
      detail: {
        cart: [...cart],
        totals: calculateTotals(cart),
      },
    }),
  );
};

export const getCartItems = () => [...cart];

export const getCartCount = () =>
  cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);

export const calculateTotals = (items = cart) => {
  const subtotal = items.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0,
  );
  const taxRate = 0.07;
  const tax = Number((subtotal * taxRate).toFixed(2));
  const total = Number((subtotal + tax).toFixed(2));
  const count = items.reduce((sum, item) => sum + Number(item.quantity), 0);
  return { subtotal, tax, total, count };
};

export const addToCart = (comic, quantity = 1) => {
  const existing = cart.find((item) => item.id === comic.id);
  if (existing) {
    existing.quantity = Math.min(
      99,
      Number(existing.quantity) + Number(quantity),
    );
  } else {
    cart.push({
      id: comic.id,
      title: comic.title,
      price: comic.price,
      coverImg: comic.coverImg,
      publisher: comic.publisher,
      quantity: Number(quantity),
    });
  }
  persist();
};

export const updateQuantity = (id, quantity) => {
  cart = cart
    .map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, Number(quantity)) }
        : item,
    )
    .filter((item) => item.quantity > 0);
  persist();
};

export const removeFromCart = (id) => {
  cart = cart.filter((item) => item.id !== id);
  persist();
};

export const clearCart = () => {
  cart = [];
  persist();
};
