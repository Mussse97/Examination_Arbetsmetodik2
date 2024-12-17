// Mollys burgare lista 
const selectedMeals = [
  {
      "id": "the-gramercy-tavern-burger-4-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Gramercy Tavern",
      "dsc": "The Gramercy Tavern Burger - 4 Pack",
      "price": 99,
      "rate": 5,
      "country": "New York, NY"
    },
    {
      "id": "shake-shack-shackburger-8-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134862/shake-shack-shackburger-8-pack.973a5e26836ea86d7e86a327becea2b0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Shake Shack",
      "dsc": "Shake Shack ShackBurger® – 8 Pack",
      "price": 99,
      "rate": 5,
      "country": "New York, NY"
    },
    {
      "id": "gotts-cheeseburger-kit-for-4",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132933/gotts-complete-cheeseburger-kit-for-4.7bdc74104b193427b3fe6eae39e05b5e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Gott's Roadside",
      "dsc": "Gott's Complete Cheeseburger Kit for 4",
      "price": 99,
      "rate": 5,
      "country": "St. Helena, CA"
    },
    {
      "id": "le-big-matt-kit-for-6",
      "img": " https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122768/handf-double-stack-burger-kit-for-4.4ee9f54b1d6087e9996335f07c13e5cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Emmy Squared",
      "dsc": "Le Big Matt Burger Kit for 6",
      "price": 99,
      "rate": 5,
      "country": "Brooklyn, NY"
    },
    {
      "id": "shake-shack-shackburger-16-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134022/shake-shack-shackburger-16-pack.316f8b09144db65931ea29e34869287a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Shake Shack",
      "dsc": "Shake Shack Shackburger® – 16 Pack",
      "price": 149,
      "rate": 4,
      "country": "New York, NY"
    },
    {
      "id": "wagyu-burger-patties-12-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107019/wagyu-burger-patties-12-pack.6116f4cd648dee20651f99e21e7d758b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Westholme Wagyu",
      "dsc": "Wagyu Burger Patties - 12 Pack",
      "price": 149,
      "rate": 5,
      "country": "Queensland, Australia"
    },
    {
      "id": "21-usda-prime-burgers-pack-of-18-8oz-each",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103477/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Peter Luger Steak House",
      "dsc": "USDA Prime Burgers - Pack of 18 (8oz each)",
      "price": 149,
      "rate": 4,
      "country": "Brooklyn, NY"
    },
];




let cart = []; 
const menuContainer = document.getElementById("menu-container");
const orderCount = document.getElementById("order-count");


function displayMenu() {
  const burgers = selectedMeals.slice(0, 10); 
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
  const item = selectedMeals.find((burger) => burger.id === itemId);
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
  const cartItemsContainer = document.getElementById("cart-content");
  const totalPriceContainer = document.getElementById("total-price");

//  cartItemsContainer.innerHTML = "";
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
    updateCartView() 
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

const cartOverlay = document.getElementById("cartOverlay");
const cartContent = document.getElementById("cartContent");
const totalAmount = document.getElementById("totalAmount");

function openCart() {
  updateCartView();
  cartOverlay.classList.add("active");
}


function closeCart() {
  cartOverlay.classList.remove("active");
}


function updateCartView() {
  cartContent.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>${item.price} kr</p>
      </div>
      <div class="cart-quantity">
        <button onclick="changeQuantity('${item.id}', -1)">◀</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity('${item.id}', 1)">▶</button>
      </div>
    `;
    cartContent.appendChild(cartItem);
    
  });
  totalAmount.innerText = `TOTAL BELOPP: ${total} KR`;
}

