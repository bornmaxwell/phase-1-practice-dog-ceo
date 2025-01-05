console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
  // Fetch and display dog images
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const imageContainer = document.getElementById("dog-image-container");
      data.message.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "A random dog";
        imageContainer.appendChild(img);
      });
    })
    .catch((error) => console.error("Error fetching dog images:", error));

  // Fetch and display dog breeds
  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const breeds = Object.keys(data.message);
      const breedList = document.getElementById("dog-breeds");

      breeds.forEach((breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
        breedList.appendChild(li);
      });
    })
    .catch((error) => console.error("Error fetching dog breeds:", error));

  // Change font color of clicked breed
  const breedList = document.getElementById("dog-breeds");

  breedList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      event.target.style.color = "blue"; // Change to your desired color
    }
  });

  // Filter breeds by selected letter
  const breedDropdown = document.getElementById("breed-dropdown");

  breedDropdown.addEventListener("change", (event) => {
    const selectedLetter = event.target.value;
    const breedItems = breedList.querySelectorAll("li");

    breedItems.forEach((li) => {
      if (selectedLetter === "all" || li.textContent.startsWith(selectedLetter)) {
        li.style.display = "list-item"; // Show the breed
      } else {
        li.style.display = "none"; // Hide the breed
      }
    });
  });
});
