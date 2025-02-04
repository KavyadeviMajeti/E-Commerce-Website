const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const closeCartButton = document.getElementById('closeCartButton');
const checkoutButton = document.getElementById('checkoutButton');
const cartItemsList = document.getElementById('cartItems');
const totalPriceElement = document.getElementById('totalPrice');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let cart = [];

// Function to update the cart display
function updateCart() {
  // Clear existing cart items
  cartItemsList.innerHTML = '';
  
  let total = 0;
  
  // Add each item in the cart to the cart list
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(li);
    total += item.price;
  });
  
  // Update the total price
  totalPriceElement.textContent = total.toFixed(2);
  
  // Update the cart button text
  cartButton.textContent = `View Cart (${cart.length})`;
}

// Event listener for the "View Cart" button
cartButton.addEventListener('click', () => {
  cartModal.style.display = 'flex';
  updateCart();
});

// Event listener for the "Close" button in the cart modal
closeCartButton.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

// Event listener for the "Proceed to Checkout" button
checkoutButton.addEventListener('click', () => {
  alert('Proceeding to checkout...');
  // In a real app, you'd handle the checkout process here
  cart = []; // Clear the cart after checkout
  updateCart();
  cartModal.style.display = 'none';
});

// Event listener for adding products to the cart
addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const productElement = event.target.closest('.product');
    const productId = productElement.dataset.id;
    const productName = productElement.querySelector('h3').textContent;
    const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));

    // Add the product to the cart
    cart.push({ id: productId, name: productName, price: productPrice });
    updateCart();
  });
});

