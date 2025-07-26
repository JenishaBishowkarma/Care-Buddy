let cart = [];

function addToCart(event) {
  event.stopPropagation(); // Prevent triggering parent click events

  const card = event.target.closest('.product-card');
  const name = card.querySelector('.product-name').textContent;
  const price = card.querySelector('.product-price').textContent;

  cart.push({ name, price });

  console.log("🛒 Added to cart:", { name, price });
  console.log("🧺 Current Cart:", cart);

  // Visual feedback for user
  event.target.textContent = "Added ✓";
  event.target.disabled = true;

  setTimeout(() => {
    event.target.textContent = "Add to Cart";
    event.target.disabled = false;
  }, 1500);
}
