const api = "https://dummyjson.com/products";

const request = new XMLHttpRequest();
request.open("GET", api);
request.send();
request.addEventListener("load", function () {
  const response = JSON.parse(this.responseText); // Parse the JSON response

  console.log(response);
});
