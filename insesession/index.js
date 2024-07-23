const api = "https://dummyjson.com/products";

const request = new XMLHttpRequest();
request.open("GET", api);
request.send();

request.addEventListener("load", function () {
  console.log(this.response);

  const cardTextElements = document.querySelectorAll(".card-text");

  let htmlContent = "";

  for (const product of products) {
    htmlContent += `
        <span>
        <p>${product.title} ${product.id}</p>
        </span>
        <br>
      `;
  }

  cardTextElements.forEach((element) => {
    element.innerHTML = htmlContent;
  });
});
