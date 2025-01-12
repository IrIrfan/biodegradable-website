// Simple cart functionality

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = ''; // Clear the current cart list

    let total = 0;

    // Loop through each item in the cart and display it
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartItemsContainer.appendChild(li);
        total += item.price;
    });

    // Update the total price
    totalPriceElement.textContent = total.toFixed(2);
}

// Call displayCart function to show the items
displayCart();
