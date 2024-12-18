const body = document.body;
// Kopplar alla mina id:s till scripten, deklarerar varibler.

const divFood = document.getElementById("foodRate");
const divRest = document.getElementById("restRate");
const submitBtn = document.getElementById("submitButton");
const rating = document.getElementById("rating");
const commentBox = document.getElementById("commentBox");
const writeComment = document.getElementById("writeComment");
const rateH1 = document.getElementById("rateH1");
const rateP = document.getElementById("rateP");
const welcomeBack = document.getElementById("welcomeBack");
const thumbsUp = document.getElementById("thumbsUp");
const value = document.getElementById("collectStar");
const star = document.getElementById("stars");

// Kör funktionerna
submitPressed();

//Skapar funktioner till sidan

document.addEventListener("DOMContentLoaded", function () {
  const starContainers = document.querySelectorAll(".foodRate, .restRate");

  starContainers.forEach(container => {
      const stars = container.querySelectorAll(".stars");
      
      stars.forEach((star, index) => {
          star.addEventListener("click", () => {
              stars.forEach((s, i) => {
                  if (i <= index) {
                      s.style.color = "gold"; 
                  } else {
                      s.style.color = "gray"; 
                  }
              });
              const ratingValue = index + 1;
              const ratingDisplay = container.nextElementSibling?.querySelector(".collectStar");
              if (ratingDisplay) {
                  ratingDisplay.textContent = ratingValue;
              }
          });
      });
  });
});




  // Funktion för submit knappen, add eventlistner med click funktion
  function submitPressed() {
    submitBtn.addEventListener("click", () => {
      const thankYou = document.createElement("p");

      // display none på alla element
      submitBtn.style.display = "none";
      writeComment.style.display = "none";
      divFood.style.display = "none";
      divRest.style.display = "none";
      rateH1.style.display = "none";
      rateP.style.display = "none";

      // Display block på element som har display none
      welcomeBack.style.display = "block";
      thumbsUp.style.display = "block";

      // Ser till att ett "tack" meddelande syns samt knapp för att stänga rutan
      thankYou.textContent = "Tack för din feedback";
      commentBox.appendChild(thankYou);
      thankYou.style.color = "#30211d";
      thankYou.style.fontSize = "40px";
      thankYou.style.paddingTop = "10px";

      // Lägga till en border
      const border = document.createElement("span");
      rating.appendChild(border);
      border.style.border = "2px, solid #cf3800";
      border.style.width = "80vw";
      border.style.height = "0.1vh";
      border.style.marginTop = "10px";

      // Skapar en knapp som ska göra så att man kommer tillbaka till startsidan
      const closeRatingButton = document.createElement("button");
      rating.appendChild(closeRatingButton);

      closeRatingButton.textContent = "Gå tillbaka till startsidan";
      closeRatingButton.style.marginTop = "10px";
      closeRatingButton.style.width = "60vw";
      closeRatingButton.style.height = "4vh";
      closeRatingButton.style.fontSize = "larger";
      closeRatingButton.style.borderRadius = "5px";
      closeRatingButton.style.border = "none";
      closeRatingButton.style.backgroundColor = "#cf3800";
      closeRatingButton.style.color = "white";

      closeRatingButton.addEventListener("click", () => {
        window.location.href = "index.html";
        rating.style.display = "none"; // Ska bort när filerna är mergade till main
      });
    });
  };

