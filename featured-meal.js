// Importera den exporterade datan ("selectedMeals") från meals.js
import { selectedMeals } from './meals.js';

// Skapa en lista som matchar veckans dagar med måltids-ID:n från "selectedMeals"
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

// Använd dagens index för att hämta motsvarande måltids-ID från mealsByDay
const todaysMealId = mealsByDay[todayIndex];

// Hitta den måltid i "selectedMeals" som matchar dagens ID
const todaysMeal = selectedMeals.find(meal => meal.id === todaysMealId);

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
