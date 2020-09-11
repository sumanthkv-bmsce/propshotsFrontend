import { isAuthenticated } from "../../auth/helper/index";
import { API } from "../../backend";

// const user = isAuthenticated();

export const addItemToCart = (productId, userId, user, product) => {
  console.log("productId", productId);
  console.log("user", user);
  console.log("userId", userId);
  console.log("product", product);
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      //   Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const addItemToignore = (productId, userId, user, product) => {
  console.log("productId", productId);
  console.log("user", user);
  console.log("userId", userId);
  console.log("product", product);
  return fetch(`${API}/ignore/${productId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      //   Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const loadCart = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
};

export const removeItemFromCart = (productId) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.map((product, index) => {
      if (product._id === productId) {
        cart.splice(index, 1);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return cart;
};

export const cartEmpty = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("cart");
    let cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

    next();
  }
};
