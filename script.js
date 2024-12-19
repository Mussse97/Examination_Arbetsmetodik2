
// Hämta hamburgaremenyn och sidomenyn
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');

// Lägg till klick-event på hamburgaremenyn
hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Lägg till/ta bort klassen 'active' på sidomenyn
});

// Hitta knappen och popupen
const infoButton = document.querySelector('.info-button');
const popup = document.getElementById('popup');

// Lägg till en klickhändelse på knappen
infoButton.addEventListener('click', () => {
  popup.classList.toggle('active'); // Visa eller dölj popupen
});

// Lägg till en händelse för att stänga popupen om man klickar utanför
document.addEventListener('click', (event) => {
  if (!event.target.closest('.info-container')) {
    popup.classList.remove('active');
  }
});
