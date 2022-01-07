import pageLoader from "./home-page";
import contactLoader from "./contact";
import menuLoader from "./menu";
import "./style.css";

function createTitle() {
  const body = document.body;

  const title = document.createElement("h1");
  title.textContent = "Tasty Burguers!";
  body.prepend(title);
}

function createTabs() {
  const body = document.body;

  const tabsContainerDiv = document.createElement("nav");
  const tabsContainer = document.createElement("ul");
  tabsContainer.id = "tabs-container";
  const homeTab = document.createElement("il");
  homeTab.className = "nav selected";
  const menuTab = document.createElement("il");
  menuTab.className = "nav";
  const contactTab = document.createElement("il");
  contactTab.className = "nav";
  homeTab.textContent = "Home";
  menuTab.textContent = "Menu";
  contactTab.textContent = "Contact";

  tabsContainer.appendChild(homeTab);
  tabsContainer.appendChild(menuTab);
  tabsContainer.appendChild(contactTab);

  tabsContainerDiv.appendChild(tabsContainer);
  body.prepend(tabsContainerDiv);
}

function linkButtons() {
  const buttons = document.querySelectorAll(".nav");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      deslinkButtons();
      button.classList.add("selected");
      addTab();
    });
  });
}

function deslinkButtons() {
  const buttons = document.querySelectorAll(".nav");

  buttons.forEach((button) => {
    button.classList.remove("selected");
  });
}

function addTab() {
  const tabs = document.querySelectorAll(".nav");
  const home = document.querySelector(".home-div");
  const contact = document.querySelector(".contact-div");
  const menu = document.querySelector(".menu-div");

  tabs.forEach((tab) => {
    if (tab.className === "nav selected") {
      if (tab.textContent === "Home") {
        home.classList.add("selected");
        contact.classList.remove("selected");
        menu.classList.remove("selected");
      } else if (tab.textContent === "Contact") {
        contact.classList.add("selected");
        home.classList.remove("selected");
        menu.classList.remove("selected");
      } else if (tab.textContent === "Menu") {
        menu.classList.add("selected");
        contact.classList.remove("selected");
        home.classList.remove("selected");
      }
    }
  });
}

function createPage() {
  createTabs();
  createTitle();
  linkButtons();
  pageLoader();
  menuLoader();
  contactLoader();
}

createPage();
