function contactLoader() {
  const content = document.getElementById("content");
  const contactDiv = document.createElement("div");
  contactDiv.className = "contact-div";
  const title = document.createElement("h1");
  const principalImage = document.createElement("img");
  const mainText = document.createElement("p");

  title.textContent = "Contact!";
  principalImage.src = "/src/assets/img/burguer1.png";
  principalImage.alt = "Hamburguer";
  mainText.textContent =
    "Find the best hamburguer in the world that you can have: tasty, awesome, cheap and fast!";

  contactDiv.appendChild(title);
  contactDiv.appendChild(mainText);
  contactDiv.appendChild(principalImage);
  content.appendChild(contactDiv);
}

export default contactLoader;
