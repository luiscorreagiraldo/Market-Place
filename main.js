const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const hamburger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const carrito = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
hamburger.addEventListener("click", toggleMobileMenu);
carrito.addEventListener("click", details);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);




//funciones


function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");

}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function details() {
  shoppingCartContainer.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function openProductDetailAside() {
  productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
  console.log("holi,funciono");
  productDetailContainer.classList.add("inactive");
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

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // PRODUCT= {name,price, image}=> product.image
    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.addEventListener("click", openProductDetailAside);

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
    productImg.classList.add("product-cardImg");

    productInfoFigure.appendChild(productImg);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);



//experimento
// const productDetailedImage = document.querySelector("#product-detailed-image");
// productDetailedImage.setAttribute("src", product.image);
//experimento

// const productDetailIndividual = document.querySelector('.-detail-indiviproductdual');

// function openProductDetail(evento)
// {
//     productDetailIndividual.classList.remove('hidden');
//     productDetail.classList.add('hidden');
//     const lista = productList;
//     const elemento = lista.find(producto => producto.image == evento.explicitOriginalTarget.src);
//     console.log(elemento);

//     const mostrarElemento = `
//     <div class="product-detail-individual-close">
//         <img src="./icons/icon_close.png" alt="close" class="close-product-detail">
//     </div>
//      <img src=${elemento.image} alt='${elemento.name}' title='${elemento.name}'>
//     <div class="product-info">
//         <p>$${elemento.price}</p>
//         <p>${elemento.name}</p>
//         <p>${elemento.description}.</p>
//         <button class="primary-button add-to-cart-button">
//             <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
//             Add to cart
//          </button>
//     </div>`;
//     const prueba = document.querySelector('.product-detail-individual');
//     prueba.innerHTML = mostrarElemento;

//     const closeProductDetail = document.querySelector('.product-detail-individual-close');
//     closeProductDetail.addEventListener('click', closedProductDetail);
//     function closedProductDetail()
//     {
//         productDetailIndividual.classList.add('hidden');
//     }
// }
//https://github.com/Mora-Antonio/NewJavaScript
