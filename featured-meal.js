import { selectedMeals } from './meals.js';

// Koppling mellan veckodagar och rätternas ID
const mealsByDay = [
  "the-gramercy-tavern-burger-4-pack", // Måndag
  "shake-shack-shackburger-8-pack",  // Tisdag
  "gotts-cheeseburger-kit-for-4",      // Onsdag
  "le-big-matt-kit-for-6", // Torsdag
  "shake-shack-shackburger-16-pack",  // Fredag
  "wagyu-burger-patties-12-pack",      // Lördag
  "21-usda-prime-burgers-pack-of-18-8oz-each"  // Söndag
];

// Hämta dagens veckodag som index (0 = Söndag, 1 = Måndag, ..., 6 = Lördag)
const todayIndex = new Date().getDay();

// Hämta ID för dagens måltid från mealsByDay
const todaysMealId = mealsByDay[todayIndex];

// Hitta dagens måltid i selectedMeals baserat på ID
const todaysMeal = selectedMeals.find(meal => meal.id === todaysMealId);

// Hitta elementet där dagens rätt ska visas
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
  weeklyMenuItems[todayIndex].style.color = "#45C861"; // Grön färg
  weeklyMenuItems[todayIndex].style.fontWeight = "bold"; // Fet text
}
