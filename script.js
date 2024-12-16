const menuContainer = document.getElementById("menu-card-container");
// Change Menu list here
const items = db.bbqs.slice(0, 5);

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





