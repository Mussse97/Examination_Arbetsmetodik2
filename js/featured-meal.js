// Importera den exporterade datan ("selectedMeals") från meals.js
import { selectedMeals } from './meals.js';

// Skapa en lista som matchar veckans dagar med måltids-ID:n från "selectedMeals"
const mealsByDay = [
  "the-gramercy-tavern-burger-4-pack", // Måndag
  "shake-shack-shackburger-8-pack",    // Tisdag
  "gotts-cheeseburger-kit-for-4",      // Onsdag
  "le-big-matt-kit-for-6",             // Torsdag
  "shake-shack-shackburger-16-pack",   // Fredag
  "wagyu-burger-patties-12-pack",      // Lördag
  "21-usda-prime-burgers-pack-of-18-8oz-each" // Söndag
];

// Korrigerad funktion för att hämta dagens index baserat på rätt tidszon
function getTodayIndex() {
  const formatter = new Intl.DateTimeFormat('sv-SE', { weekday: 'long', timeZone: 'Europe/Stockholm' });
  const date = new Date();
  const dayName = formatter.format(date).toLowerCase();

  const days = ['måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag', 'söndag'];
  return days.indexOf(dayName);
}



// Hämta dagens veckodag som index (0 = Måndag, ..., 6 = Söndag)
const todayIndex = (new Date().getDay() + 6) % 7; // Flyttar index så att 0 = Måndag

// Använd dagens index för att hämta motsvarande måltids-ID från mealsByDay
const todaysMealId = mealsByDay[todayIndex];

// Hitta den måltid i "selectedMeals" som matchar dagens ID
const todaysMeal = selectedMeals.find(meal => meal.id === todaysMealId);

//Felsökning för dagarna
console.log('todayIndex:', todayIndex);
console.log('todaysMealId:', todaysMealId);

// Hämta referensen till det HTML-element där dagens måltid ska visas
const mealContainer = document.getElementById("meal-container");

// Dynamiskt uppdatera HTML-innehållet med dagens måltid
if (todaysMeal) {
  mealContainer.innerHTML = `
    <article>
      <img src="${todaysMeal.img}" alt="${todaysMeal.name}" width="200px" style="border-radius: 8px;" />
      <h3>${todaysMeal.name}</h3>
      <p>${todaysMeal.dsc}</p>
      <p><strong>Pris:</strong> ${todaysMeal.price} SEK</p>
      <p><em>Ursprungsland:</em> ${todaysMeal.country}</p>
    </article>
  `;
} else {
  mealContainer.innerHTML = "<p>Ingen dagens rätt tillgänglig idag.</p>";
}

// Markera dagens måltid i veckomenyn
const weeklyMenuItems = document.querySelectorAll("#weekly-menu ul li");

// Kontrollera om dagens index matchar menyn
if (weeklyMenuItems[todayIndex]) {
  weeklyMenuItems[todayIndex].style.color = "#8b2500"; // Röd färg
  weeklyMenuItems[todayIndex].style.fontWeight = "bold"; // Fet text
}

//Amandas Javascript till header och hamburgermeny

// Hämta hamburgaremenyn och sidomenyn
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');

// Lägg till klick-event på hamburgaremenyn
hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Lägg till/ta bort klassen 'active' på sidomenyn
});
