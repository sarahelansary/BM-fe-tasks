"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => {
    let listProductHTML = document.querySelector(".listProduct");
    let listCartHTML = document.querySelector(".listCart");
    let iconCart = document.querySelector(".icon-cart");
    let iconCartSpan = document.querySelector(".icon-cart span");
    let body = document.querySelector("body");
    let closeCart = document.querySelector(".close");
    let products = [];
    let cart = [];
    const initApp = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch("products.json");
            products = yield response.json();
            console.log("Fetched Products:", products);
            addDataToHTML();
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
                console.log("Loaded Cart:", cart);
                addCartToHTML();
            }
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    });
    initApp();
    iconCart.addEventListener("click", () => {
        body.classList.toggle("showCart");
    });
    closeCart.addEventListener("click", () => {
        body.classList.toggle("showCart");
    });
    const addDataToHTML = () => {
        if (products.length > 0) {
            products.forEach((product) => {
                let newProduct = document.createElement("div");
                newProduct.dataset.id = product.id;
                newProduct.classList.add("item");
                newProduct.innerHTML = `<img src="${product.img}" alt="">
                    <h2>${product.name}</h2>
                    <div class="price">${product.price}</div>
                    <button class="addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    };
    listProductHTML.addEventListener("click", (event) => {
        let positionClick = event.target;
        if (positionClick.classList.contains("addCart")) {
            let product_id = positionClick.parentElement.dataset
                .id;
            console.log("Adding to cart:", product_id);
            addToCart(product_id);
        }
    });
    const addToCart = (product_id) => {
        let positionThisProductInCart = cart.findIndex((value) => value.product_id === product_id);
        if (cart.length <= 0) {
            cart = [
                {
                    product_id: product_id,
                    quantity: 1,
                },
            ];
        }
        else if (positionThisProductInCart < 0) {
            cart.push({
                product_id: product_id,
                quantity: 1,
            });
        }
        else {
            cart[positionThisProductInCart].quantity += 1;
        }
        console.log("Cart after adding:", cart);
        addCartToHTML();
        addCartToMemory();
    };
    const addCartToMemory = () => {
        localStorage.setItem("cart", JSON.stringify(cart));
    };
    const addCartToHTML = () => {
        listCartHTML.innerHTML = "";
        let totalQuantity = 0;
        if (cart.length > 0) {
            console.log("Updating cart in HTML...");
            cart.forEach((item) => {
                totalQuantity += item.quantity;
                let newItem = document.createElement("div");
                newItem.classList.add("item");
                newItem.dataset.id = item.product_id;
                let positionProduct = products.findIndex((value) => value.id === item.product_id);
                if (positionProduct === -1) {
                    console.error(`Product with ID ${item.product_id} not found in product list`);
                    return;
                }
                let info = products[positionProduct];
                let totalPrice = parseFloat(info.price) * item.quantity;
                newItem.innerHTML = `
            <div class="image">
              <img src="${info.img}">
            </div>
            <div class="name">
              ${info.name}
            </div>
            <div class="totalPrice">${totalPrice.toFixed(2)}</div>
            <div class="quantity">
              <span class="minus"><</span>
              <span>${item.quantity}</span>
              <span class="plus">></span>
            </div>`;
                listCartHTML.appendChild(newItem);
            });
        }
        iconCartSpan.innerText = totalQuantity.toString();
    };
    listCartHTML.addEventListener("click", (event) => {
        let positionClick = event.target;
        if (positionClick.classList.contains("minus") ||
            positionClick.classList.contains("plus")) {
            let product_id = positionClick.parentElement.parentElement.dataset.id;
            let type = positionClick.classList.contains("plus") ? "plus" : "minus";
            changeQuantityCart(product_id, type);
        }
    });
    const changeQuantityCart = (product_id, type) => {
        let positionItemInCart = cart.findIndex((value) => value.product_id === product_id);
        if (positionItemInCart >= 0) {
            if (type === "plus") {
                cart[positionItemInCart].quantity += 1;
            }
            else {
                cart[positionItemInCart].quantity -= 1;
                if (cart[positionItemInCart].quantity <= 0) {
                    cart.splice(positionItemInCart, 1);
                }
            }
            console.log("Cart after quantity change:", cart);
            addCartToHTML();
            addCartToMemory();
        }
        else {
            console.error(`Product with ID ${product_id} not found in cart`);
        }
    };
})();
