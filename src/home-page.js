function pageLoader() {
  const content = document.getElementById("content");
  const homeDiv = document.createElement("div");
  homeDiv.classList = "home-div selected";
  const title = document.createElement("h1");
  const principalImage = document.createElement("img");
  const mainText = document.createElement("p");

  title.textContent = "Big Hamburguers!";
  principalImage.src = "/src/assets/img/burguer1.png";
  principalImage.alt = "Hamburguer";
  mainText.textContent =
    "Find the best hamburguer in the world that you can have: tasty, awesome, cheap and fast!";

  homeDiv.appendChild(title);
  homeDiv.appendChild(mainText);
  homeDiv.appendChild(principalImage);
  content.appendChild(homeDiv);
}

export default pageLoader;