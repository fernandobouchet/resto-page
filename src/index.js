import pageLoader from "./home-page";
import contactLoader from "./contact";
import menuLoader from "./menu";
import "./style.css";

function createTitle() {
  const body = document.body;

  const title = document.createElement("h1");
  title.textContent = "BEST BURGUERS";
  body.prepend(title);
}

function createTabs() {
  const body = document.body;

  const tabsContainerDiv = document.createElement("nav");
  const tabsContainer = document.createElement("ul");
  tabsContainer.id = "tabs-container";
  const homeTab = document.createElement("il");
  homeTab.id = "home-tab";
  const menuTab = document.createElement("il");
  menuTab.id = "menu-tab";
  const contactTab = document.createElement("il");
  contactTab.id = "contact-tab";
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
  const homeTab = document.querySelector(".home-div");
  const contactTab = document.querySelector(".contact-div");
  const menuTab = document.querySelector(".menu-div");

  const home = document.getElementById("home-tab");
  const menu = document.getElementById("menu-tab");
  const contact = document.getElementById("contact-tab");

  home.addEventListener("click", () => {
    deslinkButtons();
    homeTab.classList.add("selected");
  });
  menu.addEventListener("click", () => {
    deslinkButtons();
    menuTab.classList.add("selected");
  });
  contact.addEventListener("click", () => {
    deslinkButtons();
    contactTab.classList.add("selected");
  });
}

function deslinkButtons() {
  const pages = document.querySelectorAll(".page-div");
  pages.forEach((page) => {
    page.classList.remove("selected");
  });
}

function createPage() {
  createTitle();
  createTabs();
  pageLoader();
  menuLoader();
  contactLoader();
  linkButtons();
}

createPage();
