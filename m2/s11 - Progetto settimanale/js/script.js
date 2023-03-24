document.addEventListener("DOMContentLoaded", function () {
  async function fetchProducts(url) {
    let data = await fetch(url);
    let response = await data.json();
    console.log(response);
  }
  fetchProducts("https://striveschool-api.herokuapp.com/api/product/");
});

fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0N2RkZmY4MWI0MjAwMTM5YjJjMmEiLCJpYXQiOjE2NzkwNjQ2NjAsImV4cCI6MTY4MDI3NDI2MH0.9U357mcMZzkoFeV4KbYroRuMvFHqwwTc1rgHPzyrFoA",
  },
});
