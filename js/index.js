/*jshint esversion: 6 */

/////Variables/////
const navButtons = document.querySelectorAll(".navA");
const headBtns = document.querySelectorAll(".burger-icons");
const openMain = document.querySelector("#hamburger-icon");
const closeMain = document.querySelector("#close-icon");
const openMenu = document.querySelector(".drop-bar");
const openBtn = document.querySelectorAll("#open");
const disOpenBtn = document.querySelector("#open");

const closeBtn = document.querySelectorAll("#close");
const disCloseBtn = document.querySelector("#close");
const allTabs = document.querySelectorAll(".tab");
let hiddenBio = document.querySelectorAll(".hidden-text");

/////Mouse listeners to highlight action points/////
for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener(
    "mouseover",
    function(e) {
      e.target.style.color = "black";
      e.target.style.background = "gray";
      e.stopPropagation();
      setTimeout(function() {
        e.target.style.color = "";
        e.target.style.background = "";
      }, 200);
    },
    false
  );
}

for (let i = 0; i < allTabs.length; i++) {
  allTabs[i].addEventListener(
    "mouseover",
    function(e) {
      e.target.style.background = "lightgray";
      e.stopPropagation();
      setTimeout(function() {
        e.target.style.color = "";
        e.target.style.background = "";
      }, 200);
    },
    false
  );
}

for (let i = 0; i < headBtns.length; i++) {
  headBtns[i].addEventListener(
    "mouseover",
    function(e) {
      e.target.style.background = "lightgray";
      e.stopPropagation();
      setTimeout(function() {
        e.target.style.color = "";
        e.target.style.background = "";
      }, 200);
    },
    false
  );
}

////main menu/////

openMain.addEventListener("click", function(e) {
  openMain.style.display = "none";
  closeMain.style.display = "flex";
  openMenu.style.display = "flex";
});

closeMain.addEventListener("click", function(e) {
  openMain.style.display = "flex";
  closeMain.style.display = "none";
  openMenu.style.display = "none";
});

/////Developer Cards/////

class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;

    this.tabData = this.tabElement.dataset.tab;

    if (this.tabData === "all") {
      this.cards = document.querySelectorAll(".card");
    } else {
      this.cards = document.querySelectorAll(
        `.card[data-tab='${this.tabData}']`
      );
    }

    this.cards = Array.from(this.cards).map(card => new TabCard(card));

    console.log(this.cards);

    this.tabElement.addEventListener("click", () => {
      this.selectTab();
    });
  }

  selectTab() {
    const tabs = document.querySelectorAll(".tab");
    console.log(tabs);

    tabs.forEach(tab => {
      tab.classList.remove("active-tab");
    });
    console.log(tabs);

    this.tabElement.classList.add("active-tab");

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => (card.style.display = "none"));

    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement) {
    this.cardElement = cardElement;
  }
  selectCard() {
    this.cardElement.style.display = "flex";
  }
}

let tabs = document.getElementsByClassName("tab");
//console.log(tabs);

Array.from(tabs).forEach(currentValue => {
  new TabLink(currentValue);
});

/////Buttons on Dev Cards/////
// openBtn.forEach(currentItem =>
//   currentItem.addEventListener("mouseover", function(e) {
//     currentItem.background = "lightgray";
//   })
// );

openBtn.forEach(currentItem =>
  currentItem.addEventListener("click", function() {
    currentItem.style.display = "none";
    closeBtn.forEach(currentItem => currentItem.style.display = "flex");
    hiddenBio.forEach(currentItem => currentItem.style.display = "flex");
    
  })
);

closeBtn.forEach(currentItem =>
  currentItem.addEventListener("click", function() {
    currentItem.style.display = "none";
    openBtn.forEach(currentItem => currentItem.style.display = "flex");
    hiddenBio.forEach(currentItem => currentItem.style.display = "none");
    document.location.reload();
   
  })
);





// closeBtn.forEach(e => addEventListener("click", function(e) {
//     hiddenBio.style.display = "none";
//     //openBtn.style.display = "flex";
//     e.target.style.display = "none";
//   }));
