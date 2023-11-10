const cardContainer = document.getElementById("cardContainer");

cardData.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");


    const imgElement = document.createElement("img");
    imgElement.src = card.imageSrc;
    imgElement.alt = "image-icon";
    cardDiv.appendChild(imgElement);


    const titleElement = document.createElement("h3");
    titleElement.textContent = card.title;
    cardDiv.appendChild(titleElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = card.description;
    cardDiv.appendChild(descriptionElement);

    cardContainer.appendChild(cardDiv);

})


const newCardContainer = document.getElementById("newCardContainer");


cardData2.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card2");


    const imgElement = document.createElement("img");
    imgElement.src = card.imageSrc;
    imgElement.alt = "image-icon";
    cardDiv.appendChild(imgElement);


    const titleElement = document.createElement("h3");
    titleElement.textContent = card.title;
    cardDiv.appendChild(titleElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = card.description;
    cardDiv.appendChild(descriptionElement);

    newCardContainer.appendChild(cardDiv);

})