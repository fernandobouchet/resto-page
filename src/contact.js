function contactLoader() {
  const content = document.getElementById("content");
  const contactDiv = document.createElement("div");
  contactDiv.className = "contact-div";
  const title = document.createElement("h2");
  const principalImage = document.createElement("img");
  const telephone = document.createElement("p");
  const direction = document.createElement("p");

  title.textContent = "CONTACT US!";
  telephone.textContent = "Tel: 5555-5555";
  direction.textContent = "Dir: Fake Street 123, CA.";
  principalImage.src = "/src/assets/img/map.png";
  principalImage.alt = "map";

  contactDiv.appendChild(title);
  contactDiv.appendChild(telephone);
  contactDiv.appendChild(direction);
  contactDiv.appendChild(principalImage);
  content.appendChild(contactDiv);
}

export default contactLoader;
