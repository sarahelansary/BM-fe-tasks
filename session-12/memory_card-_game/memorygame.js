const section = document.querySelector("section");

const cardArray = [
  {
    name: "part1",
    img: "assests/part1.jpg",
  },
  {
    name: "part3",
    img: "assests/part3.jpeg",
  },

  {
    name: "part4",
    img: "assests/part4-2.jpg",
  },

  {
    name: "part6",
    img: "assests/part6.jpeg",
  },
  {
    name: "part5",
    img: "assests/part5.jpeg",
  },
  {
    name: "part2",
    img: "assests/part2.jpeg",
  },
  {
    name: "part7",
    img: "assests/part7.jpeg",
  },
  {
    name: "part8",
    img: "assests/part8.webp",
  },

  //another identical set of cards
  {
    name: "part1",
    img: "/assests/part1.jpg",
  },
  {
    name: "part6",
    img: "/assests/part6.jpeg",
  },
  {
    name: "part5",
    img: "/assests/part5.jpeg",
  },
  {
    name: "part2",
    img: "/assests/part2.jpeg",
  },
  {
    name: "part7",
    img: "/assests/part7.jpeg",
  },
  {
    name: "part8",
    img: "/assests/part8.webp",
  },
  {
    name: "part3",
    img: "/assests/part3.jpeg",
  },
  {
    name: "part4",
    img: "/assests/part4-2.jpg",
  },
];

//====function: randomize & sort
const randSort = () => {
  cardArray.sort(() => 0.5 - Math.random());
  return cardArray;
};

//====function: game start & set cards on the board
const playGame = () => {
  const cardArray = randSort();
  //create element, attach class
  cardArray.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const front = document.createElement("img");
    front.classList.add("front");

    const back = document.createElement("img");
    back.src = "/assests/seamless-pattern-playing-cards-33169480.webp";
    back.classList.add("back");

    //attach img file to the cards
    front.src = item.img;

    //add img name to card div
    card.setAttribute("name", item.name);

    //attach the cards to the section + attach front & back to the card
    section.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggle");
      checkCards(e);
    });
  });
};
let remainingCards = cardArray.length;

//====function: check if two cards are matching
const checkCards = (e) => {
  const click = e.target; //click -> capture target==cards clicked

  click.classList.add("flipped"); //click -> add 'flipped' to the class
  const flip = document.querySelectorAll(".flipped"); //save flipped cards into flip variable
  const toggle = document.querySelectorAll(".toggle");

  //compare & match after clicking two cards
  if (flip.length === 2) {
    if (flip[0].getAttribute("name") === flip[1].getAttribute("name")) {
      remainingCards -= 2;

      flip.forEach((card) => {
        card.classList.remove("flipped");
        card.classList.add("matched");
        flip[0].parentNode.removeChild(flip[0]);
        flip[1].parentNode.removeChild(flip[1]);
      });
    } else {
      flip.forEach((card) => {
        card.classList.remove("flipped"); //remove 'flipped' from the class

        setTimeout(() => card.classList.remove("toggle"), 1000); //cancel 'toggle' after # ms when cards are not matching
      });
    }
  }
  if (remainingCards === 0) {
    // Win condition (no remaining cards)
    window.alert("You Won!");
    section.style.pointerEvents = "none";
  }
};

//====function: reset the game
const reset = () => {
  let cardArray = randSort(); //shuffle
  let fronts = document.querySelectorAll(".front");
  let cards = document.querySelectorAll(".card");

  section.style.pointerEvents = "none"; //make cards unclickable until game resets

  //==random & sort again
  cardArray.forEach((item, i) => {
    cards[i].classList.remove("toggle"); //undo flip
    cards[i].style.pointerEvents = "all"; //make matching sets from a previous game clickable again
    fronts[i].src = item.img; //update image
    cards[i].setAttribute("name", item.name); //update name
    section.style.pointerEvents = "all"; //clickable again after reset
  });
};

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", reset);

playGame();
