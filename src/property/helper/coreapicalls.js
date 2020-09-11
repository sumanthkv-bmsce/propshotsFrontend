import { API } from "../../backend";
import { isAuthenticated } from "../../auth/helper/index";
const user = isAuthenticated();
if (user) {
  let uid = user.user._id;
}
export const getProducts = () => {
  return fetch(`${API}/products`, {
    method: "GET",
  })
    .then((response) => {
      // console.log("This is my style", response.json())
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//get all product
export const getmyproduct = () => {
  return fetch(`${API}/myproducts`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getUser = () => {
  return fetch(`${API}/user/${user.user._id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
