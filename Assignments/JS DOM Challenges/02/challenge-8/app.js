const cartItems = document.getElementById('cart-items');
const emptyCart = document.querySelector('.empty-cart');
const cartTotal = document.querySelector('#cart-total h3');

let cart = {}; 

function addToCart(productName, price) {
    emptyCart.style.display = 'none';

    if (cart[productName]) {
        cart[productName].quantity++;
    } else {
        cart[productName] = { price, quantity: 1 };
    }

    updateCart();
}

function updateCart() {
    cartItems.innerHTML = ''; 

    let total = 0;
    let hasItems = false;

    for (let product in cart) {
        let item = cart[product];
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        hasItems = true;

        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${product} - $${item.price.toFixed(2)} (x${item.quantity})</p>
            <div class="quantity-controls">
                <button onclick="changeQuantity('${product}', -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity('${product}', 1)">+</button>
                <button onclick="removeFromCart('${product}')">Remove</button>
            </div>
        `;

        cartItems.appendChild(cartItem);
    }

    cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;

    if (!hasItems) {
        emptyCart.style.display = 'block';
    }
}

function changeQuantity(product, amount) {
    if (cart[product]) {
        cart[product].quantity += amount;

        if (cart[product].quantity <= 0) {
            delete cart[product]; // Remove item if quantity is 0
        }
    }

    updateCart();
}

function removeFromCart(product) {
    delete cart[product];
    updateCart();
}
