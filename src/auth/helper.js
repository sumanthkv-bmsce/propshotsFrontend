import { API } from "../backend";

export const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      console.log(response);

      return response.json();
    })
    .catch((err) => console.log(err));
};
export const signupcheck = (user) => {
  return fetch(`${API}/signupcheck`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      console.log(response);

      return response.json();
    })
    .catch((err) => console.log(err));
};
export const FbSignup = (user) => {
  return fetch(`${API}auth/facebook`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      console.log(response);

      return response.json();
    })
    .catch((err) => console.log(err));
};
export const signin = (user) => {
  console.log("asdad", user);
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      console.log("signin resyyyyyy", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const signincheck = (user) => {
  // console.log("asdad", user);
  return fetch(`${API}/auth/signincheck`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      console.log("signin resyyyyyy", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getalldata = (user) => {
  console.log("llllllllllllllllll", user);
  return fetch(`${API}/home`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
