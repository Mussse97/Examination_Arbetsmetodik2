const menuContainer = document.getElementById("menu-card-container");
const items = db.bbqs.slice(0, 5);

items.forEach((item, index) => {
  const article = document.createElement("article");
  article.classList.add("menu-card");

  // Create the image
  const img = document.createElement("img");
  img.classList.add("menu-image");
  img.src = item.img;
  img.alt = item.name;

  // Create the info container
  const infoContainer = document.createElement("section");
  infoContainer.classList.add("menu-info-container");

  // Create the title
  const title = document.createElement("section");
  title.classList.add("menu-title");
  title.innerHTML = item.name;

  // Create the description
  const desc = document.createElement("section");
  desc.classList.add("menu-desc");
  desc.innerHTML = item.dsc;

  // Create the price and button container
  const priceContainer = document.createElement("section");
  priceContainer.classList.add("menu-price");
  priceContainer.innerHTML = `${item.price} kr`;

  // Add Item button
  const button = document.createElement("button");
  button.classList.add("menu-add-item");
  button.textContent = "Lägg till";

  // Append button to price container
  priceContainer.appendChild(button);

  // Append all elements to info container
  infoContainer.appendChild(title);
  infoContainer.appendChild(desc);
  infoContainer.appendChild(priceContainer);

  // Append image and info container to article
  article.appendChild(img);
  article.appendChild(infoContainer);

  // Append the article to the main container
  menuContainer.appendChild(article);
});