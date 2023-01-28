import { products } from "./products.js";

console.log(products);

const product = document.querySelector('.product')
window.addEventListener('DOMContentLoaded',()=>{
    let displayProducts = products.map((product)=>{
        return `
        <div class="products-container">
        <article class="product">
        <img
        src="${product.image}"
        class="product-img img"
        alt=""
        />
        <footer>
        <h5 class="product-name">${product.title}</h5>
        <span class="product-price">${product.price}</span>
        </footer>
        </article>
        </div> `
    })
    displayProducts =displayProducts.join("")
    product.innerHTML = displayProducts
})


const all = document.querySelector('.all')
all.addEventListener('click',()=>{
    let displayProducts = products.map((product)=>{
    return `
    <div class="products-container">
    <article class="product">
      <img
        src="${product.image}"
        class="product-img img"
        alt=""
      />
      <footer>
        <h5 class="product-name">${product.title}</h5>
        <span class="product-price">${product.price}</span>
      </footer>
    </article>
  </div> `
    })
    displayProducts =displayProducts.join("")
    product.innerHTML = displayProducts
})


/////////////////////////////////////////////////////
//Marcos
const marcos = document.querySelector('.marcos')
marcos.addEventListener('click',()=>{
    let displayProducts = products.map((product)=>{
        if( `${product.company}` === 'marcos'){
        return `
    <div class="products-container">
    <article class="product">
      <img
        src="${product.image}"
        class="product-img img"
        alt=""
      />
      <footer>
        <h5 class="product-name">${product.title}</h5>
        <span class="product-price">${product.price}</span>
      </footer>
    </article>
  </div> `}
    })
    displayProducts =displayProducts.join("")
    product.innerHTML = displayProducts
})

//Ikea
const ikea = document.querySelector('.ikea')
ikea.addEventListener('click',()=>{
    let displayProducts = products.map((product)=>{
        if( `${product.company}` === 'ikea'){
    return `
    <div class="products-container">
    <article class="product">
      <img
        src="${product.image}"
        class="product-img img"
        alt=""
      />
      <footer>
        <h5 class="product-name">${product.title}</h5>
        <span class="product-price">${product.price}</span>
      </footer>
    </article>
  </div> `}
    })
    displayProducts =displayProducts.join("")
    product.innerHTML = displayProducts
})

//Caressa

const caressa = document.querySelector('.Caressa')
caressa.addEventListener('click',()=>{
    let displayProducts = products.map((product)=>{
        if( `${product.company}` === 'caressa'){
    return `
    <div class="products-container">
    <article class="product">
      <img
        src="${product.image}"
        class="product-img img"
        alt=""
      />
      <footer>
        <h5 class="product-name">${product.title}</h5>
        <span class="product-price">${product.price}</span>
      </footer>
    </article>
  </div> `}
    })
    displayProducts =displayProducts.join("")
    product.innerHTML = displayProducts
})

//Liddy
const liddy = document.querySelector('.Liddy')
liddy.addEventListener('click',()=>{
    let displayProducts = products.map((product)=>{
        if( `${product.company}` === 'liddy'){
    return `
    <div class="products-container">
    <article class="product">
      <img
        src="${product.image}"
        class="product-img img"
        alt=""
      />
      <footer>
        <h5 class="product-name">${product.title}</h5>
        <span class="product-price">${product.price}</span>
      </footer>
    </article>
  </div> `}
    })
    displayProducts =displayProducts.join("")
    product.innerHTML = displayProducts
})
