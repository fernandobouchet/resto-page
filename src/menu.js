function menuLoader() {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");
  menuDiv.className = "menu-div";
  const title = document.createElement("h1");
  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";
  const burguer2Container = document.createElement("div");
  const burguer3Container = document.createElement("div");
  const burguer4Container = document.createElement("div");
  const burguer5Container = document.createElement("div");

  const burguer2Title = document.createElement("h2");
  const burguer3Title = document.createElement("h2");
  const burguer4Title = document.createElement("h2");
  const burguer5Title = document.createElement("h2");

  const burguer2Text = document.createElement("p");
  const burguer3Text = document.createElement("p");
  const burguer4Text = document.createElement("p");
  const burguer5Text = document.createElement("p");

  const image2 = document.createElement("img");
  image2.className = "contact-img";
  const image3 = document.createElement("img");
  image3.className = "contact-img";
  const image4 = document.createElement("img");
  image4.className = "contact-img";
  const image5 = document.createElement("img");
  image5.className = "contact-img";
  const mainText = document.createElement("p");

  title.textContent = "OUR MENU!";
  image2.src = "/src/assets/img/burguer2.png";
  image2.alt = "Hamburguer";
  image3.src = "/src/assets/img/burguer3.png";
  image3.alt = "Hamburguer";
  image4.src = "/src/assets/img/burguer4.png";
  image4.alt = "Hamburguer";
  image5.src = "/src/assets/img/burguer5.png";
  image5.alt = "Hamburguer";
  mainText.textContent = "WE HAVE DIFFERENT OPTIONS FOR OUR COSTUMERS! TRY IT!";
  burguer2Text.textContent =
    "Simple, one burguer, with lettuce, cheese and bacon!";
  burguer3Text.textContent =
    "Two burguers, lettuce, tomatto, onnions,cheese and bacon!";
  burguer4Text.textContent = "FIVE BURGUERS! with a LOT of cheese and bacon!";
  burguer5Text.textContent =
    "This one is made with chicken, tomatto, lettuce and cheese!";

  burguer2Title.textContent = "Burguer One";
  burguer3Title.textContent = "Burguer Two";
  burguer4Title.textContent = "Burguer Three";
  burguer5Title.textContent = "Burguer Four";

  burguer2Container.appendChild(burguer2Title);
  burguer3Container.appendChild(burguer3Title);
  burguer4Container.appendChild(burguer4Title);
  burguer5Container.appendChild(burguer5Title);

  burguer2Container.appendChild(burguer2Text);
  burguer3Container.appendChild(burguer3Text);
  burguer4Container.appendChild(burguer4Text);
  burguer5Container.appendChild(burguer5Text);

  burguer2Container.appendChild(image2);
  burguer3Container.appendChild(image3);
  burguer4Container.appendChild(image4);
  burguer5Container.appendChild(image5);

  menuDiv.appendChild(title);
  menuDiv.appendChild(mainText);
  menuContainer.appendChild(burguer2Container);
  menuContainer.appendChild(burguer3Container);
  menuContainer.appendChild(burguer4Container);
  menuContainer.appendChild(burguer5Container);
  menuDiv.appendChild(menuContainer);
  content.appendChild(menuDiv);
}
export default menuLoader;
