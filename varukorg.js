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


//William - ändrat med div nestings och lagt till klasser.
function displayMenu() {
  const burgers = selectedMeals.slice(0, 7); 
  burgers.forEach((burger, index) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");
       if (index === 0) {
          card.classList.add("menu-card-first");
        }
      card.innerHTML = `
        <img class="menu-image" src="${burger.img}" alt="${burger.name}">
        <div class="menu-info">
          <h3>${burger.name}</h3>
          <p>${burger.dsc}</p>
          <div class="menu-price">${burger.price} kr
          <button class="menu-add-item" onclick="addToCart('${burger.id}');quantityOnMenu('${burger.id}', this)">Lägg till</button>
    </div>
        </div>
        `;
    
    menuContainer.appendChild(card);
  });
}


function addToCart(itemId) {
  const item = selectedMeals.find((burger) => burger.id === itemId);
  const existingItem = cart.find((cartItem) => cartItem.id === itemId);



  if (existingItem) {
    existingItem.quantity +1;
}


else {
    cart.push({ ...item, quantity: 1 });

    // William - "Se din order" fältet animering upp.
    const viewOrderField = document.getElementById("view-order");
    viewOrderField.style.display="flex";
  }
  updateOrderButton();
}


  
// William - "lägg till" knappen ändras till räknare när man trycker på den.
// Inte färdig. Går inte tillbaka till "lägg till knapp" efter 0.
// Om man tar bort eller lägger till på varukorgssidan 
// så uppdateras den inte.
      function quantityOnMenu(itemId, button) {
        const item = cart.find((cartItem) => cartItem.id === itemId);

        if (item) {
        console.log(item.quantity);
      
        if (item.quantity > 0) {
          button.classList.remove("menu-add-item");
          button.classList.add("menu-add-item-choose");
          button.innerHTML = `
            <div class="menu-quantity">
              <button class="menu-quantity button" onclick="changeQuantity('${itemId}', -1)">◀</button>
              <span class="menu-quantity-number">${item.quantity}</span>
              <button class="menu-quantity button" onclick="changeQuantity('${itemId}', 1)">▶</button>
            </div>
          `;
        } else {
          cart = cart.filter((cartItem) => cartItem.id !== itemId);
          button.classList.remove("menu-add-item-choose");
          button.classList.add("menu-add-item");
          button.innerHTML = `Lägg till`;
        }
      }
    }
      quantityOnMenu();
      updateOrderButton();



function updateOrderButton() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  orderCount.innerText = totalItems;
  
}

// William - Kommenterade ut kod som gav felmeddelanden.  
// Vet inte om den behövs eller inte.
function viewCart() {

  // const overlay = document.getElementById("cart-overlay");
  // const cartItemsContainer = document.getElementById("cart-content");
  // const totalPriceContainer = document.getElementById("total-price");

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
    // cartItemsContainer.appendChild(cartItem);
    updateCartView() 
  });
  
  // totalPriceContainer.innerText = `${total} kr`;
  // overlay.style.display = "flex";
  
}


function changeQuantity(itemId, amount) {
  const item = cart.find((cartItem) => cartItem.id === itemId);
  if (item) {
    item.quantity += amount;
    quantityOnMenu();

    
    if (item.quantity <= 0) {
       cart = cart.filter((cartItem) => cartItem.id !== itemId);
      quantityOnMenu();

    }
    
    
 // Tar bort sista item 
  if (cart.length === 0) {
    updateCartView();
    quantityOnMenu();

  }

   }
  updateOrderButton();
  viewCart();


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

// William - används för att ta bort bordets felmeddelande 
// när man stänger varukorgen.
  const errorMessage = document.getElementById("error-message");
  if (errorMessage) {
    errorMessage.style.visibility = "hidden";
  }
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
        <span class="quantity-number">${item.quantity}</span>
        <button onclick="changeQuantity('${item.id}', 1)">▶</button>
      </div>
    `;





    cartContent.appendChild(cartItem);
    
  });
  totalAmount.innerHTML = `
  <span class="total-price-text"> TOTALT: </span>  
   <span id="total-price"> ${total} kr  </span>`;
}




// Ange bordsnummer 
function placeOrder() {
  const tableNumberInput = document.getElementById("table-number");
  const errorMessage = document.getElementById("error-message");
  const submitLowerOrder = document.getElementById("your-order-button");

  submitLowerOrder.addEventListener("click", function handleOrder() {
    const value = tableNumberInput.value.trim();
    const min = parseInt(tableNumberInput.min);
    const max = parseInt(tableNumberInput.max);


    if (value === "") {
      tableNumberInput.value = null;
      errorMessage.style.visibility="visible";
      errorMessage.textContent = "Ange ett giltigt bordsnummer.";
    } else if (parseInt(value) < min || parseInt(value) > max) {
      tableNumberInput.value = null;
      errorMessage.style.visibility="visible";
      errorMessage.textContent = "Ange ett giltigt bordsnummer.";
    } else {
      alert(`Order skickad för bord ${tableNumberInput.value}!`);
      cart = [];
      location.reload();
    }
  }, { once: true }); // Ensure the listener runs only once
}

placeOrder();