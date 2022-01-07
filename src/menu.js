function menuLoader() {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");
  menuDiv.className = "menu-div";
  const title = document.createElement("h1");
  const principalImage = document.createElement("img");
  const mainText = document.createElement("p");

  title.textContent = "Menu!";
  principalImage.src = "/src/assets/img/burguer1.png";
  principalImage.alt = "Hamburguer";
  mainText.textContent =
    "Find the best hamburguer in the world that you can have: tasty, awesome, cheap and fast!";

  menuDiv.appendChild(title);
  menuDiv.appendChild(mainText);
  menuDiv.appendChild(principalImage);
  content.appendChild(menuDiv);
}
export default menuLoader;
