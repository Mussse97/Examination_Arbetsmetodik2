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
