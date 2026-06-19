let cartCount = 0;

const productContainer =
document.getElementById("products");

const searchInput =
document.getElementById("search");

let allProducts = [];

/* API Fetching */

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {

    allProducts = data;

    displayProducts(data);

})
.catch(error => {

    productContainer.innerHTML =
    "<h3>Failed to load products</h3>";

    console.log(error);
});

/* Display Products */

function displayProducts(products){

    productContainer.innerHTML = "";

    products.forEach(product => {

        const card =
        document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.title}</h3>
            <p class="price">
                ₹ ${Math.round(product.price*85)}
            </p>

            <button onclick="addToCart()">
                Add To Cart
            </button>
        `;

        productContainer.appendChild(card);
    });
}

/* DOM Manipulation */

function addToCart(){

    cartCount++;

    document.getElementById("cart-count")
    .textContent = cartCount;
}

/* Search Functionality */

searchInput.addEventListener("keyup", () => {

    const value =
    searchInput.value.toLowerCase();

    const filtered =
    allProducts.filter(product =>
        product.title
        .toLowerCase()
        .includes(value)
    );

    displayProducts(filtered);
});

/* Form Validation */

const form =
document.getElementById("registerForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const message =
    document.getElementById("message");

    if(name.trim() === ""){

        message.style.color = "red";

        message.textContent =
        "Name cannot be empty";

        return;
    }

    if(!email.includes("@")){

        message.style.color = "red";

        message.textContent =
        "Enter valid email";

        return;
    }

    message.style.color = "green";

    message.textContent =
    "Registration Successful!";
});
