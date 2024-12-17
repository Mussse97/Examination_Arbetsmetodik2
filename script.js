
let cart = []; 
const menuContainer = document.getElementById("menu-container");
const orderCount = document.getElementById("order-count");


function displayMenu() {
  const burgers = db.burgers.slice(0, 10); 
  burgers.forEach((burger) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");
    card.innerHTML = `
      <img src="${burger.img}" alt="${burger.name}">
      <div class="menu-info">
        <h3>${burger.name}</h3>
        <p>${burger.dsc}</p>
        <span class="menu-price">${burger.price} kr</span>
      </div>
      <button onclick="addToCart('${burger.id}')">Lägg till</button>
    `;
    menuContainer.appendChild(card);
  });
}


function addToCart(itemId) {
  const item = db.burgers.find((burger) => burger.id === itemId);
  const existingItem = cart.find((cartItem) => cartItem.id === itemId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  updateOrderButton();
}


function updateOrderButton() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  orderCount.innerText = totalItems;
}


function viewCart() {
  const overlay = document.getElementById("cart-overlay");
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceContainer = document.getElementById("total-price");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <span>${item.name} (${item.quantity})</span>
      <span>${item.price * item.quantity} kr</span>
      <button onclick="changeQuantity('${item.id}', 1)">+</button>
      <button onclick="changeQuantity('${item.id}', -1)">-</button>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  totalPriceContainer.innerText = `Total: ${total} kr`;
  overlay.style.display = "flex";
  
}


function changeQuantity(itemId, amount) {
  const item = cart.find((cartItem) => cartItem.id === itemId);
  if (item) {
    item.quantity += amount;
    if (item.quantity <= 0) {
      cart = cart.filter((cartItem) => cartItem.id !== itemId);
    }
  }
  updateOrderButton();
  viewCart();
}



function placeOrder() {
  const tableNumber = document.getElementById("table-number").value;
  tableNumber.value = "";
  if (!tableNumber) {
    alert("Ange bordsnummer!");
    return;
  }
  alert(`Order skickad för bord ${tableNumber}!`);
  cart = [];
  location.reload()
  
}

// Initiering
displayMenu();
