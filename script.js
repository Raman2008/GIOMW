for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productCategory = product.dataset.category;
    if (selectedValue === "all" || selectedValue === productCategory) {
    product.style.display = "block";
    } else {
    product.style.display = "none";
    }
    };
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    
    for (let i = 0; i < addToCartButtons.length; i++) {
    const button = addToCartButtons[i];
    button.addEventListener("click", function() {
    const product = this.parentNode;
    const productName = product.querySelector("h3").textContent;
    const productPrice = product.querySelector(".price").textContent;
    
    addToCart(productName, productPrice);
    });
    }
    
    function addToCart(name, price) {
    // Add item to shopping cart
    }
    
    // Shopping cart functionality
    const removeButtons = document.querySelectorAll(".remove-btn");
    const quantityInputs = document.querySelectorAll("shopping-cart input[type='number']");
    const checkoutButton = document.getElementById("checkout-btn");
    
    for (let i = 0; i < removeButtons.length; i++) {
    const button = removeButtons[i];
    button.addEventListener("click", function() {
    removeFromCart(this);
    });
    }
    
    for (let i = 0; i < quantityInputs.length; i++) {
    const input = quantityInputs[i];
    input.addEventListener("change", function() {
    updateCart
    (this);
});
}

checkoutButton.addEventListener("click", function() {
checkout();
});

function removeFromCart(removeButton) {
// Remove item from shopping cart
}

function updateCart(quantityInput) {
// Update the quantity of an item in the shopping cart
}

function checkout() {
// Checkout functionality
}
    
      