import { getData, debounce } from "./utility.js";
import { generateSearchDOM } from "./domFactory.js";
const input = document.querySelector("input");
const search_btn = document.querySelector("button");
let starships = [];
input.addEventListener(
  "keyup",
  debounce(async (event) => {
    const searchQuery = event.target.value;
    if (searchQuery === " " || searchQuery === "") {
      const element = document.querySelectorAll(
        ".search__suggesstion--container"
      )[0];
      element.innerHTML = "";
      starships = [];
      return;
    }
    const data = await getData(searchQuery);
    data.results.forEach((element) => {
      generateSearchDOM(element);
    });
    starships = data.results;
  }, 500)
);

search_btn.addEventListener("click", async (event) => {
  event.preventDefault();
  const element = document.querySelectorAll(
    ".search__suggesstion--container"
  )[0];
  const cont = document.querySelectorAll(".search__content--container")[0];
  element.innerHTML = "";
  cont.innerHTML = " ";
  starships.forEach((element) => {
    generateSearchDOM(element, ".search__content--container");
  });
  const searchQuery = input.value;
  fetch("http://localhost:3000/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: searchQuery }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Search request saved successfully");
      } else {
        throw new Error("Failed to save search request");
      }
    })
    .catch((error) => {
      console.error("Error saving search request:", error);
    });
});
