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





const menuContainer = document.getElementById("menu-card-container");
// Change Menu list here (If needed)
const items = selectedMeals.slice(0, 7);

items.forEach((item, index) => {
  const article = document.createElement("article");
  article.classList.add("menu-card");

  if (index === 0) {
    article.classList.add("menu-card-first");
  }

  // Create Image
  const img = document.createElement("img");
  img.classList.add("menu-image");
  img.src = item.img;
  img.alt = item.name;

  // Create info container
  const infoContainer = document.createElement("section");
  infoContainer.classList.add("menu-info-container");

  // Create title
  const title = document.createElement("section");
  title.classList.add("menu-title");
  title.innerHTML = item.name;

  // Create description
  const desc = document.createElement("section");
  desc.classList.add("menu-desc");
  desc.innerHTML = item.dsc;

  // Create price and button container
  const priceContainer = document.createElement("section");
  priceContainer.classList.add("menu-price");
  const price = item.price;
  const roundedUpPrice = Math.ceil(price);
  priceContainer.innerHTML = `${roundedUpPrice} kr`;

  // Add Item button
  const button = document.createElement("button");
  button.classList.add("menu-add-item");
  button.textContent = "Lägg till";

  // Append menu card content
  priceContainer.appendChild(button);
  infoContainer.appendChild(title);
  infoContainer.appendChild(desc);
  infoContainer.appendChild(priceContainer);
  article.appendChild(img);
  article.appendChild(infoContainer);
  menuContainer.appendChild(article);
});







// "Se din order" 
let menuLowerOrderButton = document.getElementById("cart-container");
let showLowerOrder  = document.getElementById("your-order-overlay");
let closeLowerOrder  = document.getElementById("close-your-order-overlay");

menuLowerOrderButton.addEventListener("click", ()=> {
  showLowerOrder.style.display ="flex";
  showLowerOrder.style.animation = "yourOrderLowerAnimation 1s forwards";
})

closeLowerOrder.addEventListener("click", ()=> {
  showLowerOrder.style.animation = "yourOrderLowerCloseAnimation 1s forwards";
  setTimeout(() => {
    showLowerOrder.style.display ="none";
    errorMessage.style.display="none";
  }, "1000")
})


// Ange bordsnummer ERROR
const tableNumberInput = document.getElementById("table-number");
const errorMessage = document.getElementById("error-message");
const submitLowerOrder = document.getElementById("your-order-button");

  submitLowerOrder.addEventListener("click", function () {
    const value = tableNumberInput.value.trim();
    const min = parseInt(tableNumberInput.min);
    const max = parseInt(tableNumberInput.max);
  
    if (value === "") {
      tableNumberInput.value = null;
      errorMessage.style.display = "block";
      errorMessage.textContent = "Ange ett giltigt bordsnummer.";
    } else if (parseInt(value) < min || parseInt(value) > max) {
      tableNumberInput.value = null;
      errorMessage.style.display = "block";
      errorMessage.textContent = "Ange ett giltigt bordsnummer.";
    } else {
      errorMessage.style.display = "none";
    }
  });





