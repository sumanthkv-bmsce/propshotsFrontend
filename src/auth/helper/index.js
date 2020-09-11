import { API } from "../../backend";
// API means ;http://localhost:7000/api/

export const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "aaplication/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//signin
export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "aaplication/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  console.log("reaxged");
  if (typeof window != "undefined")
    localStorage.setItem("jwt", JSON.stringify(data));
  next();
};

//signout
export const signout = (next) => {
  if (typeof window != "undefined") localStorage.removeItem("jwt");
  next();

  return fetch(`${API}/signout`, {
    method: "GET",
  })
    .then((response) => console.log("signout success"))
    .catch((err) => console.log(err));
};

export const isAuthenticated = () => {
  // console.log("auth");
  if (typeof window == "undefined") {
    // console.log("1");
    return false;
  }
  if (localStorage.getItem("jwt")) {
    // console.log("2");

    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    // console.log("3");

    return false;
  }
};
const user = isAuthenticated();

export const updateUser = (name, email) => {
  email = name.email;
  let uid = user.user._id;
  name = name.name;

  console.log("name", name);
  console.log("emal", email);
  return fetch(`${API}/updateuser/${uid}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: { name, email },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

