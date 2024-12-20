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
const burgers = selectedMeals.slice(0, 7); 


function displayMenu() {
  
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

let cartGoFromItemToEmpty = false;

function addToCart(itemId) {
  const item = selectedMeals.find((burger) => burger.id === itemId);
  const existingItem = cart.find((cartItem) => cartItem.id === itemId);

    if (existingItem) {
      existingItem.quantity +1;
  }

else {
    cart.push({ ...item, quantity: 1 });

    const viewOrderField = document.getElementById("view-order");
    viewOrderField.style.display="flex";
  }
  updateOrderButton();
}

      function quantityOnMenu(itemId, button) {
        const item = cart.find((cartItem) => cartItem.id === itemId);
        const submitLowerOrder = document.getElementById("your-order-button");
        submitLowerOrder.style.backgroundColor="#cf3800";
        submitLowerOrder.style.pointerEvents="auto";

        
        if (cartGoFromItemToEmpty === true) {
          button.innerHTML = `
          <div class="menu-quantity">
            <div onclick="addToCart('${itemId}')">Lägg till</div>
          </div>
        `;   
    }
        if (item) {
        if (item.quantity >= 1) {
          addToCart(itemId);
          button.classList.remove("menu-add-item");
          button.classList.add("menu-add-item-choose");

          button.innerHTML = `
            <div class="menu-quantity">
              <button class="menu-quantity button" onclick="changeQuantity('${itemId}', -1)">◀</button>
              <span class="menu-quantity-number">${item.quantity}</span>
              <button class="menu-quantity button" onclick="changeQuantity('${itemId}', 1)">▶</button>
            </div>
          `;   
      };
        if (item.quantity === 0)  {
        
          cart = cart.filter((cartItem) => cartItem.id !== itemId);
          button.classList.remove("menu-add-item-choose");
          button.classList.add("menu-add-item");
          button.innerHTML = `Lägg till`;
          button.setAttribute("onclick", `quantityOnMenu('${itemId}', this)`);
          cartGoFromItemToEmpty = true; 
    }
      }
    }
      quantityOnMenu();
      updateOrderButton();
     

function updateOrderButton() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  orderCount.innerHTML = totalItems;
  
}

function viewCart() {
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    updateCartView() 
  }); 
}


function changeQuantity(itemId, amount) {
  const item = cart.find((cartItem) => cartItem.id === itemId);
  const menuButtons = document.querySelectorAll(".menu-add-item, .menu-add-item-choose");

  if (item) {
    item.quantity += amount;
    menuButtons.forEach((button) => {
      if (button.onclick.toString().includes(itemId)) {
        quantityOnMenu(itemId, button); 
      }
    });


    if (item.quantity <= 0) {
       cart = cart.filter((cartItem) => cartItem.id !== itemId);
       menuButtons.forEach((button) => {
        if (button.onclick.toString().includes(itemId)) {
          button.innerHTML = `
          <div class="menu-quantity">
            <div onclick="addToCart('${itemId}')">Lägg till</div>
          </div>
        `; 
        }
      });

      }


 // Tar bort sista item 
  if (cart.length === 0) {

    const submitLowerOrder = document.getElementById("your-order-button");
    submitLowerOrder.style.backgroundColor="#86615b";
    submitLowerOrder.style.pointerEvents="none";


    const viewOrderField = document.getElementById("view-order");
    viewOrderField.style.animation = "viewOrderAnimationHide .4s forwards";
    setTimeout(() => {
      viewOrderField.style.display="none";
      viewOrderField.style.bottom="0";
      viewOrderField.style.animation = "viewOrderAnimation .4s forwards";
    }, 400);

  }
  updateOrderButton();
  updateCartView();
   }
  viewCart();

}

displayMenu();

const cartOverlay = document.getElementById("cartOverlay");
const cartContent = document.getElementById("cartContent");
const totalAmount = document.getElementById("totalAmount");


function openCart() {
  updateCartView();
  cartOverlay.style.zIndex="1000";
  cartOverlay.classList.add("active");
  const viewOrderField = document.getElementById("view-order");
  setTimeout(() => {
    viewOrderField.style.display="none";
    viewOrderField.style.bottom="0";
  }, 300);
}


function closeCart() {
  const cartOverlay = document.getElementById("cartOverlay");
  cartOverlay.classList.remove("active");
  setTimeout(() => {
    cartOverlay.style.zIndex="-1000";
    viewOrderField.style.display="none";
    viewOrderField.style.bottom="0";
  }, 400);

// William - används för att ta bort bordets felmeddelande 
  const errorMessage = document.getElementById("error-message");
  const viewOrderField = document.getElementById("view-order");

  if (errorMessage) {
    errorMessage.style.visibility = "hidden";
  }
  
  if (cart.length >= 1) {
  setTimeout(() => {
    viewOrderField.style.display="flex";
  }, 400);
}
  else
    viewOrderField.style.display="none";
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
      const orderSuccessPopup = document.getElementById("cart-order-success-popup");
      const orderSuccessPopupText = document.getElementById("cart-order-success-popup-text");
      const orderSuccessPopupButton = document.getElementById("cart-order-success-popup-button");
      const orderSuccessPopupOverlay = document.getElementById("cart-order-success-popup-overlay");

      orderSuccessPopupOverlay.style.display="block";
      orderSuccessPopup.style.display = "flex";
      orderSuccessPopupText.innerHTML= `Order skickad <br> för <span class="success-order-table-style"> bord ${tableNumberInput.value}! </span>`;


      cart = [];
      orderSuccessPopupButton.addEventListener("click", ()=> {
        window.location.href = "feedbackIndex.html";
      });
    }
  }, { once: true }); // Ensure the listener runs only once
}

placeOrder();

//Amandas kod
// Hämta hamburgaremenyn och sidomenyn
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');

// Lägg till klick-event på hamburgaremenyn
hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Lägg till/ta bort klassen 'active' på sidomenyn
});
