const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const hamburger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const carrito = document.querySelector(".navbar-shopping-cart");
const productdetail = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
hamburger.addEventListener("click", toggleMobileMenu);
carrito.addEventListener("click", details);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}

function details() {
  productdetail.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: "$120.00",
  image: "./Bike.jpg",
});
productList.push({
  name: "Collar",
  price: "$13.00",
  image: "./collar.jpg",
});
productList.push({
  name: "Fridge",
  price: "$900.00",
  image: "./Fridge.jpg",
});
productList.push({
  name: "Smoking",
  price: "$90.00",
  image: "./Smoking.jpg",
});
// <div class="product-card">
// <img src="./pexels-photo-276517.jpg" alt="" class="product-img">
// <div class="product-info">
//     <div>
//         <p>$120,00</p>
//         <p>Bike</p>
//     </div>

//     <figure>
//         <img src="./icons/bt_add_to_cart.svg" alt="">
//     </figure>
// </div>
// </div>

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImg = document.createElement("img");
    productImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productImg.classList.add("product-cardImg")

    productInfoFigure.appendChild(productImg);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList)



// //borrar
// const productInfoFigure=document.createElement('figure');
// const productImgCart=document.createElement('img');
// productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');