const section = document.querySelector("section");

const cardArray = [
  { name: "part1", img: "/assests/part1.jpg" },
  { name: "part3", img: "/assests/part3.jpeg" },
  { name: "part4", img: "/assests/part4-2.jpg" },
  { name: "part6", img: "/assests/part6.jpeg" },
  { name: "part5", img: "/assests/part5.jpeg" },
  { name: "part2", img: "/assests/part2.jpeg" },
  { name: "part7", img: "/assests/part7.jpeg" },
  { name: "part8", img: "/assests/part8.webp" },
  { name: "part1", img: "/assests/part1.jpg" },
  { name: "part6", img: "/assests/part6.jpeg" },
  { name: "part5", img: "/assests/part5.jpeg" },
  { name: "part2", img: "/assests/part2.jpeg" },
  { name: "part7", img: "/assests/part7.jpeg" },
  { name: "part8", img: "/assests/part8.webp" },
  { name: "part3", img: "/assests/part3.jpeg" },
  { name: "part4", img: "/assests/part4-2.jpg" },
];

const randSort = () => cardArray.sort(() => 0.5 - Math.random());

const playGame = () => {
  const shuffledArray = randSort();
  shuffledArray.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const front = document.createElement("img");
    front.classList.add("front");
    front.src = item.img;

    const back = document.createElement("img");
    back.src = "/assests/seamless-pattern-playing-cards-33169480.webp";
    back.classList.add("back");

    card.setAttribute("name", item.name);
    card.appendChild(front);
    card.appendChild(back);
    section.appendChild(card);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggle");
      checkCards(e);
    });
  });
};

let remainingCards = cardArray.length;

let clickCount = 0;
let firstCardTimeout;

const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  clickCount++;

  const flippedCards = document.querySelectorAll(".flipped");

  if (clickCount === 1) {
    firstCardTimeout = setTimeout(() => {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.classList.remove("toggle");
      });
      clickCount = 0;
    }, 3000);
  }
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      remainingCards -= 2;
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.classList.add("matched");
        setTimeout(() => card.parentNode.removeChild(card), 500);
      });
    } else {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggle"), 1000);
      });
    }
  }
  if (remainingCards === 0) {
    window.alert("You Won!");
    section.style.pointerEvents = "none";
  }
};

function reset() {
  const shuffledArray = randSort();
  const fronts = document.querySelectorAll(".front");
  const cards = document.querySelectorAll(".card");

  section.style.pointerEvents = "none";
  shuffledArray.forEach((item, i) => {
    cards[i].classList.remove("toggle");
    cards[i].style.pointerEvents = "all";
    fronts[i].src = item.img;
    cards[i].setAttribute("name", item.name);
  });
  section.style.pointerEvents = "all";
}

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", reset);

playGame();
